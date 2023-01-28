import { employee } from './../../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeshow',
  templateUrl: './employeeshow.component.html',
  styleUrls: ['./employeeshow.component.css']
})
export class EmployeeshowComponent implements OnInit {
  employee: employee
  id
  constructor(private srv: EmployeeService, private activeroute: ActivatedRoute) {
    this.id = this.activeroute.snapshot.paramMap.get("id")
    this.srv.getbyid(this.id).subscribe(data=>{
      this.employee=data


    })
  }

  ngOnInit(): void {
  }

}
