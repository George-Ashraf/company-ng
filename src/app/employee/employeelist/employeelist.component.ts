import { EmployeeService } from './../../services/employee.service';
import { employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  alldata: employee[]
  empty = true
  constructor(private ser: EmployeeService) {
    this.ser.get().subscribe((data: any) => {
      if (data.length > 0) {
        this.alldata = data
        this.empty = false
      }
      else {
        this.empty = true
      }
    })
  }

  delete(id) {
    this.ser.delete(id).subscribe(data => {
location.reload()
    })
  }



  ngOnInit(): void {
  }

}

