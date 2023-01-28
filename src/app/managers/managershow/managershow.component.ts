import { ActivatedRoute } from '@angular/router';
import { manager } from './../../models/manager';
import { ManagerService } from './../../services/manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managershow',
  templateUrl: './managershow.component.html',
  styleUrls: ['./managershow.component.css']
})
export class ManagershowComponent implements OnInit {
id
manager:manager

  constructor(private srv:ManagerService ,private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.paramMap.get('id')
    this.srv.getbyid(this.id).subscribe(data=>{
      this.manager=data

    })
  }

  ngOnInit(): void {
  }


}
