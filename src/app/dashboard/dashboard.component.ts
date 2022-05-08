import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceModule } from '../services/authmodule.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:string
  IPinformation:any=[]
  @ViewChild('IPaddress') IPaddress:ElementRef
 

  constructor(
    private router:Router,
    private authservice:AuthServiceModule,
    private dashboardservice:DashboardService
  ) {
    
  }

  ngOnInit(): void {

    const username=localStorage.getItem('username')
    this.username=username
  }

  submitIP(){

    this.dashboardservice.logIP(this.IPaddress.nativeElement.value).subscribe(
      (res:any)=>{
        this.IPinformation=res.data.logIp.information
        if(this.IPinformation===null){
          alert('No location found')
        }
        

      },(err:HttpErrorResponse)=>{
        if(err.message==='Signature has expired'){
          alert('token expired')
          this.router.navigateByUrl('/login')
        }
      }
    )

    
  }

  logout(){
    localStorage.removeItem('Token')
    localStorage.removeItem('username')
    this.router.navigateByUrl('/login')

  }
 
  
 

}
