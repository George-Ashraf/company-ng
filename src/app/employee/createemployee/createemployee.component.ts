import { employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private srv:EmployeeService,private route:Router) { }
employee:employee= new employee
  ngOnInit(): void {
  }

  submit(){
    this.srv.post(this.employee).subscribe(data=>{
      this.route.navigateByUrl("employeelist")
      


    })
  }

}
