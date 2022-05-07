import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-registermodule',
  templateUrl: './registermodule.component.html',
  styleUrls: ['./registermodule.component.css']
})
export class RegistermoduleComponent implements OnInit {

  signupForm:FormGroup
  validity:Boolean

  constructor() { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
    console.log(this.signupForm)
    this.validity=!this.validity;
  }  

}
