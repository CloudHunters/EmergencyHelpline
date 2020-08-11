import { Component, OnInit,Input } from '@angular/core';
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  RequestInput,
  ApiResponseArray,
  ViewAdmissionRequestArray
} from "../model/modeldata";
@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {
viewAdmissionRequestArray:ViewAdmissionRequestArray;

userType:string="";
  constructor() { }

  ngOnInit() {
    this.userType = sessionStorage.getItem("userType");
    this.viewAdmissionRequestArray = JSON.parse(sessionStorage.getItem("viewAdmissionRequestArray"));
    
  }

}
