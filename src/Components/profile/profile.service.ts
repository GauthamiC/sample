import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: Http) { }

  getCommentsDataFromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

}
