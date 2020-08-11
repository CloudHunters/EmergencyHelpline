import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  ApiResponseArray,ViewAdmissionRequestArray
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
      return this.http.post('http://localhost:8083/hospital/searchHospitals', requestInput, {headers});
    }

  public getSubmittedRequests(mobNumber){
    return this.http.get<ViewAdmissionRequestArray>("url");
  }

  public submitRequest(mobNumber, hospitalRegNumber){

    return this.http.post<string>("url",null);
  }
}
