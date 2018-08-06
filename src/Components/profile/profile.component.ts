import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';
import {ProfileDetailComponent} from './profile-detail/profile-detail.component';
import { DataService } from "./data.service";
import {CommentsComponent} from './comments/comments.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService, private data: DataService, public router: Router, private actRoute: ActivatedRoute) { }

  public commentResp = [];
  public urlID = 0;

  message:string;
  messageFromComment:string; 

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.profileService.getCommentsDataFromServer()
    .subscribe(
      res => {
        this.urlID = parseInt(this.actRoute.snapshot.paramMap.get('ID'));
        this.commentResp = res.json();
        console.log(this.commentResp);
      }, 
      error => {
        console.log(error);
      }
    );
  }

  receiveMessage($event){
    this.messageFromComment = $event;
  }

}
