import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUsername } from './loginmodule/loginmodule.validator';



@Component({
  selector: 'app-registermodule',
  templateUrl: './registermodule.component.html',
  styleUrls: ['./registermodule.component.css']
})
export class RegistermoduleComponent implements OnInit {

  signupForm:FormGroup
  validity:Boolean
  showEye:Boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'username':new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'password':new FormControl(null,[Validators.required,ValidateUsername,Validators.minLength(8)])
    })
  }
  onSubmit(){
    console.log(this.signupForm)
    this.validity=!this.validity;
  }
  toggleEye(){
    this.showEye=!this.showEye
    let doc=document.getElementById('exampleInputPassword') as HTMLInputElement
    if(this.showEye){

      doc.type='text'
      
    }else{
      doc.type='password'
    }
    

  }  

}
