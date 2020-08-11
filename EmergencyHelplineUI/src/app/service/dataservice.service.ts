import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  ApiResponseArray,ViewAdmissionRequestArray,SubmitAdmissionResponse,ViewAdmissionHospitalRequestArray
} from "../model/modeldata";
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }


   public getHospitalSearchResult(requestInput){
      const headers = {
      'Content-type': 'application/json'
    }
      return this.http.post<ApiResponseArray>('http://localhost:8083/hospital/searchHospitals', requestInput, {headers});
    }

  public getSubmittedRequests(mobNumber){
    const headers = {
    'Content-type': 'application/json'
  }
    mobNumber = "9840789719";
    return this.http.get<ViewAdmissionRequestArray>('http://localhost:8082/patient/viewAdmission/' + mobNumber, {headers});
  }

  public viewHospitalSubmittedRequests(hospitalRegnNo){
    const headers = {
    'Content-type': 'application/json'
  }
  alert("test")
    hospitalRegnNo = "REGN1234";
    return this.http.get<ViewAdmissionHospitalRequestArray>('http://localhost:8083/hospital/viewAdmission/' + hospitalRegnNo, {headers});
  }

  public submitRequest(submitAdmissionRequest){
    const headers = {
    'Content-type': 'application/json'
  }
    console.log(JSON.stringify(submitAdmissionRequest))
    alert("test")
    return this.http.post<SubmitAdmissionResponse>('http://localhost:8083/patient/submitAdmission', submitAdmissionRequest, {headers});
  }

  public submitHospitalRequest(submitAdmissionRequest){
    const headers = {
    'Content-type': 'application/json'
  }
    console.log(JSON.stringify(submitAdmissionRequest))
    alert("test")
    return this.http.post<SubmitAdmissionResponse>('http://localhost:8083/patient/submitAdmission', submitAdmissionRequest, {headers});
  }
}
