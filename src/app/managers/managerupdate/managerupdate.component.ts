import { manager } from './../../models/manager';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from './../../services/manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managerupdate',
  templateUrl: './managerupdate.component.html',
  styleUrls: ['./managerupdate.component.css']
})
export class ManagerupdateComponent implements OnInit {
manager:manager
id
  constructor(private srv:ManagerService, private route:Router,private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.paramMap.get('id')
    this.srv.getbyid(this.id).subscribe(data=>{
    this.manager=data
    })
  }

  ngOnInit(): void {
  }

  edit(){
    this.srv.put(this.id,this.manager).subscribe(data=>{
      this.route.navigateByUrl('managerlist')
    })
  }

}
