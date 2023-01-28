import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ucompanyname
  upassword
  tryagain=""
  constructor(private srv: UsersService, private route: Router) { }

  ngOnInit(): void {
  }





  login() {
    this.srv.get().subscribe((data: any) => {


      let user = data.find(alldata => {
        return alldata.companyname==this.ucompanyname && alldata.password==this.upassword

      })



      if(user){

       this.route.navigateByUrl(`managerlist`)

      }
      else{

        this.tryagain="try again"

      }
    })



  }



}




