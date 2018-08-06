import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-viewchild',
  templateUrl: './comment-viewchild.component.html',
  styleUrls: ['./comment-viewchild.component.css']
})
export class CommentViewchildComponent implements OnInit {

  public childString:string = "Hola from View Child";

  constructor() { }

  ngOnInit() {
  }

}
