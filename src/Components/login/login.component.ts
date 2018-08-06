import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginResponse } from './../../Models/Login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public loginResp: Array<LoginResponse> = [];
  constructor(private loginService: LoginService, public router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {}

  onSignInButton() {
    console.log(this.username);
    console.log(this.password);
    
    this.loginService
      .makeLoginServiceCall(this.username, this.password)
      .subscribe(
        res => {
          console.log(res.json());
          this.loginResp.push(res.json());
          //passing data from one comp to another as query parameter
          this.router.navigate(["/home", {username:"akash", password:"akash"}]);
        },
        error => {
          console.log('Error', error);

        }
      );
  }
}
