import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../services/employee.service';
import { employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  employee: employee
  id
  constructor(private srv: EmployeeService, private activeroute: ActivatedRoute, private route:Router) {
    this.id = this.activeroute.snapshot.paramMap.get("id")
    this.srv.getbyid(this.id).subscribe(data=>{
      this.employee=data


    })
  }

  edit(){
    this.srv.put(this.id,this.employee).subscribe(data=>{
      this.route.navigateByUrl("employeelist")
    })
  }

  ngOnInit(): void {
  }

}
