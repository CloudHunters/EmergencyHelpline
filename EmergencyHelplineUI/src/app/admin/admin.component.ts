import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { takeWhile, finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { NgControl } from '@angular/forms';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  isPatient : boolean;
  returnUrl: string;
  canSubscribe: boolean;
  favoriteSeason: string;
  ispatient=true;
  request:any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private changeDetector: ChangeDetectorRef) {

  }
  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
    let mrButton: MatRadioButton = mrChange.source;
    this.favoriteSeason=mrChange.value;
    if( this.favoriteSeason=='Hospital Admin'){
      this.ispatient=false;
      this.loginForm = new FormGroup({
        HospitalRegistrationNumber: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    
      });
     // console.log("admin");
    }else{
      this.ispatient=true;
      this.loginForm = new FormGroup({
        MobileNumber: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        //role: 'Patient'
      });

    }

 }
  ngOnInit() {
    this.isPatient=true;
    window.sessionStorage.removeItem('token');
    if (localStorage.getItem('Role')) {
      localStorage.clearItem('Role');
    }
    if(this.isPatient){
     // this.loginForm.get('HospitalRegistrationNumber').disable();
      this.loginForm = new FormGroup({
        MobileNumber: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
  }
  
  }
  get f() { return this.loginForm.controls; }
  get MobileNumber() {
    return this.loginForm.get('MobileNumber');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {

    this.submitted = true;
    this.loading = true
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if(this.ispatient){
      this.request = {
        username: this.f.MobileNumber.value,
        password: this.f.password.value,
        roles: 'USER',
        grant_type:'password'
      };
    }
      else{
        this.request = {
          username: this.f.HospitalRegistrationNumber.value,
          password: this.f.password.value,
          roles: 'ADMIN',
          grant_type:'password'
        };
      }

    /*const request = {
      username: this.MobileNumber.value,
      password: this.password.value,
      grant_type:'password'
    }*/
    debugger;
    this.loginService.getUserCredentials(this.request)
      .pipe(takeWhile(() => this.canSubscribe),
        finalize(() => {
          this.changeDetector.detectChanges();
        })).subscribe((data: any) => {
          if (data) {
            debugger;
            if (data.status === 200 && data.roles) {
              this.loading = false;
              window.sessionStorage.setItem('token', JSON.stringify(data));
              console.log(window.sessionStorage.getItem('token'));
              alert('Login successful !!!');
              if (data.role === 'ADMIN') {
                //this.router.navigate(['/dashboard']);
                this.saveInLocal('hospitalLogin', 'hospitalLogin');
              } else if (data.role === 'USER') {
                //this.router.navigate(['/dashboard']);
                this.saveInLocal('userLogin', 'userLogin');
              } else {
                alert('No Role configured for you.!!!');
              }
            } else {
              alert('Login Unsuccessfull !!!');
            }

          }
        },
          (error: Error) => {

          });

  }
  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    localStorage.setItem(key, val);
  }


}
