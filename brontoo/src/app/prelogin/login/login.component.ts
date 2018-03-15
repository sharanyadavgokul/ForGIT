import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

/* interface loginDetails{
  email:string;
  password:string
} */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
   loginPage : Boolean = false;
  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.loginForm= new FormGroup({
      'loginid': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null),
    });

    this.registerForm= new FormGroup({
      'loginid': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null),
    });
  }

  onSubmit(){
    let loginid, password;
    var testObject = {
      "users": [
          {
          "email": "test1@gmail.com",
          "password": "123456"
        },
        {
          "email": "test2@gmail.com",
          "password": "123456"
        }
      ]
    };
    console.log(this.loginForm.value);
    localStorage.setItem('authentication', JSON.stringify(testObject));
    //localStorage.setItem('password', this.loginForm.value.password)
    var authObj = JSON.parse(localStorage.getItem('authentication'));//testObject.users;
    for(let i=0,j=authObj.users.length;i<j;i++){
      if(authObj.users[i].email === this.loginForm.value.loginid && 
        authObj.users[i].password === this.loginForm.value.password){
        this.router.navigate(['/home']);
      }
    }
    /* if(localStorage.getItem('loginid') === this.loginForm.value.loginid && 
    localStorage.getItem('password') === this.loginForm.value.password){
    this.router.navigate(['/home']);
    } */
  }

  onRegister(){
   //var register: loginDetails;
   //register.email = this.registerForm.('loginid')
  }
}
