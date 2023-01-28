import { Router } from '@angular/router';
import { customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  customer: customer = new customer
  constructor(private srv: CustomerService,private route:Router) { }

  ngOnInit(): void {
  }

  onsubmit() {
    this.srv.post(this.customer).subscribe(data => {
      this.customer = data
      this.route.navigateByUrl("customerlist")
    })
  }

}
