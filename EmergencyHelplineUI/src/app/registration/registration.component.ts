import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { saveAs } from 'file-saver';
import { takeWhile, finalize } from 'rxjs/operators';
import { SignupService } from './services/signup.service';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
//import { MdRadioChange } from '@angular/material/';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  seasons: string[] = ['Winter', 'Spring'];
  favoriteSeason: string;
  filter: any;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  ispatient=true;
  userDetails :any;
 // userCredentailsFilePath: string = 'user-credentials.ts';
 // userDetailsFilePath: string = 'user-details.json';
  canSubscribe: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private signupService: SignupService, 
    private changeDetector: ChangeDetectorRef
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }
  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
    let mrButton: MatRadioButton = mrChange.source;
    this.favoriteSeason=mrChange.value;
    if( this.favoriteSeason=='Hospital Admin'){
      this.ispatient=false;
      this.registerForm = this.formBuilder.group({
        Name: ['', Validators.required],
        HospitalRegistrationNumber: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        role: 'ADMIN'
      });
      console.log("admin");
    }else{
      this.ispatient=true;
      this.registerForm = this.formBuilder.group({
        Name: ['', Validators.required],
        MobileNumber: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        role: 'USER'
      });

    }

 }
  ngOnInit() {
    this.canSubscribe = true;
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: 'Patient'
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {

  //  console.log(JSON.stringify(this.registerForm.getRawValue));
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    if(this.ispatient){
    this.userDetails = {
      username: this.f.MobileNumber.value,
      Name: this.f.Name.value,
      password: this.f.password.value,
      roles: this.f.role.value
    };
  }
    else{
      this.userDetails = {
        username: this.f.HospitalRegistrationNumber.value,
        Name: this.f.Name.value,
        password: this.f.password.value,
        roles: this.f.role.value
      };
    }

    debugger;
   // if (userDetails.role === '') {
      //userDetails.role = 'Patient';
  //  }
    this.signupService.createNewUser(this.userDetails).pipe(takeWhile(() => this.canSubscribe), finalize(() => {
      this.changeDetector.detectChanges();
    })).subscribe((data: any) => {
      if (data) {
        console.log(data.status)
        if (data.status === '201') {
          this.loading = false;
          alert('You have been registerd to the Cognizant Outreach Successfully. Please login.');
        }
      }
    }, (error: Error) => {
      this.loading = false;
      alert('Problem registering to Cognizant Outreach. Please try later.');
      this.router.navigate(['login']);
    });

  }

}
