import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      'loginid': new FormControl(null),
      'password': new FormControl(null),
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    sessionStorage.setItem('loginid', this.loginForm.value.loginid)
    sessionStorage.setItem('password', this.loginForm.value.password)
  }
}
