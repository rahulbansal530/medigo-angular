import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// -------------- for CI-CD -------------------
const API_URL = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/api/test/';

// -------------- for local -------------------
// const API_URL = 'http://localhost:8081/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private addCartProduct: string;

  constructor(private http: HttpClient) {
    // this.addCartProduct = 'http://localhost:8081/cart/add/4';

   }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    // return this.http.get(API_URL + 'user', { responseType: 'text' });
    return this.http.get(this.addCartProduct, { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
