import { HttpClient } from '@angular/common/http';
import { manager } from './../models/manager';
import { CompanyService } from './company.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService extends CompanyService<manager>{

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/managers")
   }

}
