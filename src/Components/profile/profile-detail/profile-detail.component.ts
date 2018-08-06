import { Component, Input } from '@angular/core';
import { DataService } from "../data.service";
import {ProfileDetailService} from './profile-detail.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent {

  
  public commentsResponse = [];
  public commentsEmailResponse = [];
  public totalID ;
  message:string;
  
  constructor(private data: DataService, private profileDetailService: ProfileDetailService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.profileDetailService.getCommentsDataFromServer()
    .subscribe(
      res => {
        this.commentsResponse = res.json();
        this.commentsEmailResponse = this.commentsResponse.map(commentsResponse => commentsResponse.email);
        console.log(this.commentsEmailResponse);
        this.totalID = this.commentsResponse.reduce((acc,comm) => acc + comm.id, 0); 
      }, 
      error => {
        console.log(error);
      }
    );
  }

  newMessage() {
    this.data.changeMessage(this.commentsEmailResponse[0]);
  }

}
