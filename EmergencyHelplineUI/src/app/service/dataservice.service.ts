import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  ApiResponseArray
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
}
