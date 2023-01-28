import { ActivatedRoute } from '@angular/router';
import { users } from './../../models/users';



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
companyname
  constructor(private activeroute:ActivatedRoute) {
this.companyname=this.activeroute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
  }



}
