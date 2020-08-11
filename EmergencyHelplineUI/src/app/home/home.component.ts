import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showAbout: boolean = false;
  constructor() {}
  userLogin: string = "";
  hospitalLogin: string = "";

  userType: string;
  ngOnInit() {
    //sessionStorage.setItem("userType", "patientLogin");
    sessionStorage.setItem("userType", "hospitalLogin");
   this.userType = "patientLogin"; 
  }
}
