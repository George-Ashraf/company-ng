import { HttpClient } from '@angular/common/http';
import { customer } from './../models/customer';
import { CompanyService } from './company.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CompanyService<customer> {

  constructor(http:HttpClient) {
    super(http,'http://localhost:3000/customers')
   }
}
