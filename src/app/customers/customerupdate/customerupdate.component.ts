import { customer } from './../../models/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {
id
customer:customer
  constructor(private srv:CustomerService,private activeroute:ActivatedRoute,private route:Router ) {
 this.id=this.activeroute.snapshot.paramMap.get("id")
 this.srv.getbyid(this.id).subscribe(data=>{
  this.customer=data
 })
   }

  ngOnInit(): void {
  }
  update(){
    this.srv.put(this.id,this.customer).subscribe(data=>{
      this.route.navigateByUrl("customerlist")
    })
  }

}
