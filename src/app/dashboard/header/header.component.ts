import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username')
  }

  logout(){
    localStorage.removeItem('Token')
    localStorage.removeItem('username')
    this.router.navigateByUrl('/login')

  }

}
