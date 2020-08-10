import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ModelData, DistrictTalukPinCode , ApiResponse} from "../model/modeldata";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {
@Input() stateDropDownData:ModelData[];
@Input() apiResponse:ApiResponse;
apiResponseObj : ApiResponse;
  constructor() { 
    
  }

  ngOnInit() {
    
    this.apiResponseObj = this.apiResponse;
    
    console.log("In RequestdetailsComponent : stateDropDownData:"+this.stateDropDownData)
    console.log("In RequestdetailsComponent : apiResponse :"+this.apiResponse)

  }



}
