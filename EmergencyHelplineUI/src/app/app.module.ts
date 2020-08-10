import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginService } from './login/services/login.service';
import { SignupService } from './registration/services/signup.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent}  from './registration/registration.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CountriesService } from './countries.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HospitalComponent,
    ServicesComponent,
    AdminComponent,
    RequestdetailsComponent,
	LoginComponent,
  RegistrationComponent,
  DropdownComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,MaterialModule,FlexLayoutModule
  ],
  providers: [LoginService,SignupService,CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

