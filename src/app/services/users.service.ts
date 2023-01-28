import { HttpClient } from '@angular/common/http';
import { users } from './../models/users';
import { CompanyService } from './company.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CompanyService<users> {

  constructor(http:HttpClient) {
    super(http,'http://localhost:3000/users')

   }
}
