import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceModule } from '../services/authmodule.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:string
  @ViewChild('IPaddress') IPaddress:ElementRef
 

  constructor(
    private router:Router,
    private authservice:AuthServiceModule
  ) {
    
  }

  ngOnInit(): void {

    const username=localStorage.getItem('username')
    this.username=username
  }

  submitIP(){

    alert(this.IPaddress.nativeElement.value)
    
  }

  logout(){
    localStorage.removeItem('Token')
    localStorage.removeItem('username')
    this.router.navigateByUrl('/login')

  }
 
  
 

}
