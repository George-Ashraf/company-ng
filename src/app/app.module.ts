
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeeshowComponent } from './employee/employeeshow/employeeshow.component';
import { EmployeeupdateComponent } from './employee/employeeupdate/employeeupdate.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreatemanagerComponent } from './managers/createmanager/createmanager.component';
import { ManagerlistComponent } from './managers/managerlist/managerlist.component';
import { ManagershowComponent } from './managers/managershow/managershow.component';
import { ManagerupdateComponent } from './managers/managerupdate/managerupdate.component';
import { CreatecustomerComponent } from './customers/createcustomer/createcustomer.component';
import { CustomershowComponent } from './customers/customershow/customershow.component';
import { CustomerupdateComponent } from './customers/customerupdate/customerupdate.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { ProfileComponent } from './users/profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateemployeeComponent,
    EmployeelistComponent,
    EmployeeshowComponent,
    EmployeeupdateComponent,
    NavbarComponent,
    CreatemanagerComponent,
    ManagerlistComponent,
    ManagershowComponent,
    ManagerupdateComponent,
    CreatecustomerComponent,
    CustomershowComponent,
    CustomerupdateComponent,
    CustomerlistComponent,
    ProfileComponent,
    NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
