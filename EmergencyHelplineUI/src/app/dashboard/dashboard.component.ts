import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  RequestInput,
  ApiResponseArray,
  ViewAdmissionRequestArray
} from "../model/modeldata";

import { FormsModule, FormArray, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { DataserviceService } from "../service/dataservice.service";
import { Router } from '@angular/router';

declare var require: any;
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  stateDropDownData: ModelData[];
  districtDropDownData: DistrictTalukPinCode[];
  apiResponseArray: ApiResponseArray;
  apiResponse: ApiResponse;
  configData = require("./configData.json");
  mdoelData: ModelData;
  selectedStateName: string = "";
  selectedCityName: string = "";
  selectedSpeciality: string = "";
  selectedpin: string = "";
  requestAdmit: boolean;
  searchMessage: string = "";
  userType: string;
  response : string;
  viewAdmissionRequestArray: ViewAdmissionRequestArray;
  requestInput: RequestInput = new RequestInput();
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataserviceService,
    private router:Router
  ) {
    this.stateDropDownData = this.configData["inputData"];
  }

  ngOnInit() {
    this.userType = sessionStorage.getItem("userType");
  }
  dashBoardForm = this.formBuilder.group({
    state: [""],
    city: [""],
    pincode: [""],
    speciality: [""]
  });

  onStateChange(state) {
    this.selectedStateName = state;
    for (var i of this.stateDropDownData) {
      this.mdoelData = i;
      if (this.mdoelData.stateName === state) {
        this.districtDropDownData = this.mdoelData.districtTalukPinCode;
      }
    }
  }
  onCityChange(city) {
    this.selectedCityName = city;
  }

  public onSearchHospital(): boolean {
    this.selectedpin = this.dashBoardForm.get("pincode").value;
    if (
      !this.selectedStateName &&
      !this.selectedCityName &&
      !this.selectedSpeciality &&
      !this.dashBoardForm.get("pincode").value
    ) {
      this.searchMessage =
        "Please choose atleast State to search for Hospitals .... ";
    } else {
      this.searchMessage = "";
      this.requestInput.state = this.selectedStateName;
      this.requestInput.city = this.selectedCityName;
      this.requestInput.pincode = this.selectedpin;
      this.requestInput.speciality = this.selectedSpeciality;

      this.dataService
        .getHospitalSearchResult(JSON.stringify(this.requestInput))
        .subscribe(data => {
          this.apiResponseArray = data;
        });
    }
    return true;
  }
  onSpecialityChange(speciality) {
    this.selectedSpeciality = speciality;
  }
  index: number;
  onClickRequestAdmission(i,hospitalDetails) {
    this.requestAdmit = true;
    this.index = i;
    this.apiResponse = hospitalDetails;
    if(this.userType === "patientLogin"){
      this.dataService.submitRequest("mobNumber",this.apiResponse.hospitalRegnNo).subscribe(data=>{
      this.response = data;
      });
     this.dataService.getSubmittedRequests("mobNumber").subscribe(data => {
      this.viewAdmissionRequestArray = data;
      sessionStorage.setItem("viewAdmissionRequestArray", JSON.stringify(this.viewAdmissionRequestArray));
    });
    this.router.navigate(['viewrequest'])
    }else if(this.userType === "hospitalLogin"){

    }

  }

  showDetails(i, hospitalDetails) {
    this.requestAdmit = !this.requestAdmit;
    this.index = i;
    this.apiResponse = hospitalDetails;
  }
}
