import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
showAbout:boolean = false;
  constructor() { }
patientLogin:string = "patientLogin";
hospitalLogin:string = "hospitalLogin";

  ngOnInit() {
sessionStorage.setItem("patientLogin",this.patientLogin);
  }

}
