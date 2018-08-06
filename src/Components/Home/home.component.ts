import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import {Router} from '@angular/router';
import { HomeService } from './home.service';
import { PostResponse } from './../../Models/Login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, public router: Router) {}

  public postResp = [];

  ngOnInit() {
    this.homeService.getPostDataFromServer()
    .subscribe(
      res => {
        // console.log(res.json());
        // this.postResp.push(res.json());
        // console.log(this.postResp);
        this.postResp = res.json();
        console.log(this.postResp);
      }, 
      error => {
        console.log(error);
      }
    );
  }


  onSelect(event){
    var target = event.target;
    var idAttr = target.attributes.id;
    var ID = idAttr.nodeValue;
    console.log(ID);
    this.router.navigate(['/profile', ID]);
  }




}
