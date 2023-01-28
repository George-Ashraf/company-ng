import { customer } from './../../models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customershow',
  templateUrl: './customershow.component.html',
  styleUrls: ['./customershow.component.css']
})
export class CustomershowComponent implements OnInit {
id
customer:customer
  constructor(private srv:CustomerService,private activeroute:ActivatedRoute) {
  this.id=this.activeroute.snapshot.paramMap.get("id")
    this.srv.getbyid(this.id).subscribe(data=>{
      this.customer=data
    })
  }

  ngOnInit(): void {
  }

}
