import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeePageComponent } from './viewemployee-page/viewemployee-page.component';
import { ViewallEmployeeComponent } from './viewall-employee/viewall-employee.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { EmployeenavbarComponent } from './employeenavbar/employeenavbar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewemployeetaskComponent } from './viewemployeetask/viewemployeetask.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"nav",
    component:NavbarComponent
  },
  {
    path:"emplogin",
    component:EmploginComponent
  },
  {
    path:"addemp",
    component:AddemployeeComponent
  },
  {
    path:"viewemp",
    component:ViewemployeePageComponent
  },
  {
    path:'viewallemp',
    component:ViewallEmployeeComponent
  },
  {
    path:"adminnav",
    component:AdminnavbarComponent
  },
  {
    path:"addtask",
    component:AddTaskComponent
  },
  {
    path:"viewtask",
    component:ViewTaskComponent
  },
  {
    path:"viewemptask",
    component:ViewemployeetaskComponent
  },

];
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    EmploginComponent,
    AddemployeeComponent,
    ViewemployeePageComponent,
    ViewallEmployeeComponent,
    AdminnavbarComponent,
    EmployeenavbarComponent,
    AddTaskComponent,
    ViewTaskComponent,
    ViewemployeetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
