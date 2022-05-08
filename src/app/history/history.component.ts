import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  information:any=[]
  showLoader:Boolean

  constructor(private dashboard:DashboardService) { }

  ngOnInit(): void {
    this.showLoader=true
    this.dashboard.IPlogHistory().subscribe(
      (res:any)=>{
        this.showLoader=false

        this.information=res.data.ipLogs

      }
    )


  }

}
