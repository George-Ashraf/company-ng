import { manager } from './../../models/manager';
import { ManagerService } from './../../services/manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managerlist',
  templateUrl: './managerlist.component.html',
  styleUrls: ['./managerlist.component.css']
})
export class ManagerlistComponent implements OnInit {
alldata:manager[]
empty=true
  constructor(private srv:ManagerService) {
    this.srv.get().subscribe((data:any)=>{

      if(data.length>0){
        this.empty=false
        this.alldata=data
      }
      else{
        this.empty=true
      }

    })
   }

   delete(id){
    this.srv.delete(id).subscribe(data=>{
      location.reload()
    })

   }

  ngOnInit(): void {
  }

}
