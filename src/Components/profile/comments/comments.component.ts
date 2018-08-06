import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import { CommentViewchildComponent } from './comment-viewchild/comment-viewchild.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements AfterViewInit {

  @ViewChild(CommentViewchildComponent) child;

  public messageFromComments:string = "comment property sent";

  public messageFromChildView:string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit() {
    this.messageFromChildView = this.child.childString;
  }

  sendMessage(){
    this.messageEvent.emit(this.messageFromComments);
  }



}
