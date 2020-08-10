import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent}  from './registration/registration.component';
const routes: Routes = [
 {
    path:"about",
    component:AboutComponent
  },
  {
    path:"dashborad",
    component:DashboardComponent
  },
   {
    path:"contact",
    component:ContactComponent
  },
   {
    path:"hospital",
    component:HospitalComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
