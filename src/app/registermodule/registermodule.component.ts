import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceModule } from '../services/authmodule.service';
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
  showAlert:Boolean=false;

  constructor(private authservice:AuthServiceModule,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'username':new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'password':new FormControl(null,[Validators.required,ValidateUsername,Validators.minLength(8)])
    })
  }
  onSubmit(){
    console.log(this.signupForm)

    const email=this.signupForm.get('email').value
    const username=this.signupForm.get('username').value
    const password=this.signupForm.get('password').value

    this.authservice.registerUser(email,username,password).subscribe(
      async res=>{
        debugger
        const loginUser:any= await this.authservice.loginUser(this.signupForm.get('username').value,this.signupForm.get('password').value).toPromise()
        await localStorage.setItem('username',loginUser.data.tokenAuth.payload.username)
        await localStorage.setItem('Token',loginUser.data.tokenAuth.token)
        await this.router.navigateByUrl('/dashboard')
        

      },err=>{
        this.showAlert=true;
        console.log(err,'error')
      }
    )
  
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
