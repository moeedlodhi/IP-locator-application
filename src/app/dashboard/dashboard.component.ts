import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceModule } from '../services/authmodule.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTab:String;
  hideBars:Boolean=true;
  showSignInBar:Boolean;
  username:any;
  toggled:Boolean=false

  constructor(
    private route:Router,
    private authservice:AuthServiceModule
  ) {
    
  }

  ngOnInit(): void {

    const token=localStorage.getItem('Token')
    if(token){
      

      this.authservice.verifyToken(token).subscribe(
        res=>{
            
            
            
        },
        err=>{
            localStorage.removeItem('Token')
            localStorage.removeItem('username')
            this.showSignInBar=true
            
            
        }
    )

    }else{
      localStorage.removeItem('Token')
      localStorage.removeItem('username')
           

    }

    if(localStorage.getItem('username')===null){
      this.showSignInBar=true;
    }else{
      this.showSignInBar=false;
      this.username=localStorage.getItem('username')
    }
    
    let doc=document.getElementById('jobsearchbutton')
    doc.click()

    


  }
 
  changeMainColor(item){
    this.selectedTab=item

}
toggleImage(){

  this.toggled=!this.toggled
  let doc =document.getElementById('mainarrow')
  doc.classList.toggle('spinimage1')      

}  

}
