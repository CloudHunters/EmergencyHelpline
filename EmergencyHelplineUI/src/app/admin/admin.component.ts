import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { DataserviceService } from "../service/dataservice.service";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  RequestInput,
  ApiResponseArray,
  ViewAdmissionRequestArray,Login,HospitalLogin
} from "../model/modeldata";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private dataService: DataserviceService) { }


loginForm:FormGroup;
loginRequest:Login= new Login();
login:Login;
usr:String = "";
response:String  = "";
  ngOnInit() {
    this.usr = "loguser";
    this.loginForm = this.formBuilder.group({
    usertype: ['patientLogin',Validators.required],

    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['',Validators.required]
  });
  }
 usrType:string="";
 username:string="";
 name:string="";
 pass:string="";

loginUser(){
  this.usrType= this.loginForm.get('usertype').value;
  this.username = this.loginForm.get('username').value;
  this.pass = this.loginForm.get('password').value;
  if(this.usrType==="patientLogin"){
 if(!this.username && !this.pass){
   alert("Please enter username(Mobile Number) and password to login")
 }else{
  this.loginRequest.roles = this.usrType;
  this.loginRequest.username = this.username;
  this.loginRequest.password = this.pass;
  this.dataService.authService(JSON.stringify(this.loginRequest)).subscribe(data=>{
      window.sessionStorage.setItem('token', JSON.stringify(data));
      this.dataService.getUsers(this.loginRequest.username).subscribe(data=>{
    if(data){
      if(data.roles === this.usrType && data.username === this.username){
      sessionStorage.setItem("userType",this.usrType);
      sessionStorage.setItem("userName",this.username);
      } else{
        this.usr="register";
      }
    }
  })
  })
 }
} else {
  if(!this.username && !this.pass){
    alert("Please enter username(Hospital Registration) and password to login")
  }else{
   this.loginRequest.roles = this.usrType;
   this.loginRequest.username = this.username;
   this.loginRequest.password = this.pass;
   this.dataService.authService(JSON.stringify(this.loginRequest)).subscribe(data=>{
     if(data){
       if(data.roles === this.usrType && data.username === this.username){
       sessionStorage.setItem("userType",this.usrType);
       sessionStorage.setItem("userName",this.username);
       } else{
         this.usr="register";
       }
     }

   })
  }
}
}

register(){
  this.loginRequest.roles = this.usrType;
  this.loginRequest.username = this.username;
  this.loginRequest.password = this.pass;
  this.loginRequest.name = this.name;
  this.dataService.registerUser(JSON.stringify(this.loginRequest)).subscribe(data=>{
    alert("Registered successfully");
})
}

}
