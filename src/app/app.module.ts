import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './../Components/login/login.component';
import { HomeComponent } from './../Components/Home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ProfileComponent } from './../Components/profile/profile.component';
import {LoginService} from './../Components/login/login.service';
import {HomeService} from './../Components/Home/home.service'
import {ProfileService} from './../Components/profile/profile.service';
import { ProfileDetailComponent } from './../Components/profile/profile-detail/profile-detail.component';
import { CommentsComponent } from './../Components/profile/comments/comments.component';
import {DataService} from './../Components/profile/data.service';
import {ProfileDetailService} from './../Components/profile/profile-detail/profile-detail.service';
import { CommentViewchildComponent } from './../Components/profile/comments/comment-viewchild/comment-viewchild.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ProfileComponent, ProfileDetailComponent, CommentsComponent, CommentViewchildComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [LoginService, HomeService, ProfileService, DataService, ProfileDetailService],
  bootstrap: [AppComponent]
})

export class AppModule {}


 