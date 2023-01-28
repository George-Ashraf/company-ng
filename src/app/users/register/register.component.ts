import { Router } from '@angular/router';

import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private srv:UsersService ,private route:Router) {

   }

formcompany = new FormGroup({
  foundername:new FormControl('',[Validators.required,Validators.minLength(10)]),
  field:new FormControl('',[Validators.required,Validators.minLength(8)]),
  companyname:new FormControl('',[Validators.required,Validators.minLength(10)]),
  address:new FormControl('',[Validators.required,Validators.minLength(10)]),
  Email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.email]),
  password:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  logo:new FormControl('',[Validators.required]),
  type:new FormControl('',[Validators.required,Validators.minLength(7)]),
  check:new FormControl('',[Validators.requiredTrue])



})
get foundername(){
  return this.formcompany.get('foundername')
}

get field(){
  return this.formcompany.get('field')
}

get companyname(){
  return this.formcompany.get('companyname')
}


get address(){
  return this.formcompany.get('address')
}

get Email(){
  return this.formcompany.get('Email')
}
get phone(){
  return this.formcompany.get('phone')
}

get password(){
  return this.formcompany.get('password')
}
get logo(){
  return this.formcompany.get('logo')
}

get type(){
  return this.formcompany.get('type')
}

submit(){
  this.srv.post(this.formcompany.value).subscribe(data=>{
this.route.navigateByUrl("login")
  })
 }


  ngOnInit(): void {
  }

}
