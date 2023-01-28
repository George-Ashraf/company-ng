import { customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
alldata:customer[]
empty=true
  constructor(private srv:CustomerService) {
    this.srv.get().subscribe((data:any)=>{
      if(data.length>0)
      {
        this.alldata=data
        this.empty=false
      }
      else{
        this.empty=true
      }

    })
   }

  ngOnInit(): void {
  }

  delete(id){
    this.srv.delete(id).subscribe(data=>{
      location.reload()
    })
  }

}
