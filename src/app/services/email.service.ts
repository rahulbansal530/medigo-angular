import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// -------------- for CI-CD -------------------
const SUBSCRIBE_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/subscribe';

// -------------- for local -------------------
// const SUBSCRIBE_API = 'http://localhost:8081/subscribe';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  subscribe(email:string){
    // console.log("call");
    this.http.post(SUBSCRIBE_API,email).subscribe();
  }
}
