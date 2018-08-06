import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http) {}
  
    getPostDataFromServer() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}

//https://jsonplaceholder.typicode.com/posts/