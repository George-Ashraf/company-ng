import { Router } from '@angular/router';
import { manager } from './../../models/manager';
import { ManagerService } from './../../services/manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createmanager',
  templateUrl: './createmanager.component.html',
  styleUrls: ['./createmanager.component.css']
})
export class CreatemanagerComponent implements OnInit {

  constructor(private srv: ManagerService, private route: Router) {}
  manager: manager = new manager
  ngOnInit(): void {
  }
  onsubmit() {
    this.srv.post(this.manager).subscribe(data => {
      this.manager = data
      this.route.navigateByUrl('managerlist')
    })
  }

}
