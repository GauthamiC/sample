import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: Http) {}

  makeLoginServiceCall(username: string, password: string) {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
