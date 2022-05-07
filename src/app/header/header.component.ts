import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSelected:any
  currentCountry:any

  constructor() { }

  ngOnInit(): void {
  }

  clickItem(event){
    console.log(event.target.id)
    this.currentSelected=event.target.id

  }

  clickCountry(event){
    console.log(event.target.id)
    this.currentCountry=event.target.id

  }

}
