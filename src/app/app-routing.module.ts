import { NotfoundComponent } from './notfound/notfound.component';



// customers
import { CustomerupdateComponent } from './customers/customerupdate/customerupdate.component';
import { CustomershowComponent } from './customers/customershow/customershow.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { CreatecustomerComponent } from './customers/createcustomer/createcustomer.component';
// managers
import { ManagerupdateComponent } from './managers/managerupdate/managerupdate.component';
import { ManagershowComponent } from './managers/managershow/managershow.component';
import { ManagerlistComponent } from './managers/managerlist/managerlist.component';
import { CreatemanagerComponent } from './managers/createmanager/createmanager.component';
// employees
import { EmployeeupdateComponent } from './employee/employeeupdate/employeeupdate.component';
import { EmployeeshowComponent } from './employee/employeeshow/employeeshow.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
// users
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  // users
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent },


  // employees
  { path: 'createemployee', component: CreateemployeeComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'employeeshow/:id', component: EmployeeshowComponent },
  { path: 'employeeupdate/:id', component: EmployeeupdateComponent },
  // managers
  { path: 'createmanager', component: CreatemanagerComponent },
  { path: 'managerlist', component: ManagerlistComponent },
  { path: 'managershow/:id', component: ManagershowComponent },
  { path: 'managerupdate/:id', component: ManagerupdateComponent },
  // customers
  { path: 'createcustomer', component: CreatecustomerComponent },
  { path: 'customerlist', component: CustomerlistComponent },
  { path: 'customershow/:id', component: CustomershowComponent },
  { path: 'customerupdate/:id', component: CustomerupdateComponent },
  // notfound
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
