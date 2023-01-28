import { HttpClient } from '@angular/common/http';
import { CompanyService } from './company.service';
import { Injectable } from '@angular/core';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CompanyService<employee> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/employees")
  }
}
