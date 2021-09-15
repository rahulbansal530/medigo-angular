import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// -------------- for CI-CD -------------------
const AUTH_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/api/auth/';

// -------------- for local -------------------
// const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  // firstname, lastname, username, email, password, contact, business_name, address, gst_no
  // register(username: string, email: string, password: string): Observable<any> {
  register(firstname, lastname, username, email, password, contact, business_name, address, gst_no): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstname, lastname, username, email, password, contact, business_name, address, gst_no
    }, httpOptions);
  }
}
