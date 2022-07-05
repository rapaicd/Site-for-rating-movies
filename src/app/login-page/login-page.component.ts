import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username='';
  password='';
  errorMsg='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.length===0){
      this.errorMsg='Invalid name';
    }else if(this.password.length<8){
      this.errorMsg='Invalid password';
    }else{
      this.errorMsg='';
      this.router.navigate(['home']);
    }
  }
}
