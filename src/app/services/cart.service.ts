import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import {map} from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { Payment } from '../models/payment';
import { Router } from '@angular/router';

// -------------- for CI-CD -------------------
const ADD_TO_CART_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/add/';
const DELETE_FROM_CART_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/delete/';
const REMOVE_FROM_CART_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/remove/';
const ADD_TO_CART_QUANTITY_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/add/';
const CART_GET = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/get';
const CHECKOUT_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/checkout';
const receipt_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/cart/export/pdf';
const PAYMENT_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/pay';

// -------------- for local -------------------
// const ADD_TO_CART_API = 'http://localhost:8081/cart/add/';
// const DELETE_FROM_CART_API = 'http://localhost:8081/cart/delete/';
// const REMOVE_FROM_CART_API = 'http://localhost:8081/cart/remove/';
// const ADD_TO_CART_QUANTITY_API = 'http://localhost:8081/cart/add/';
// const CART_GET = 'http://localhost:8081/cart/get';
// const CHECKOUT_API = 'http://localhost:8081/cart/checkout';
// const receipt_API = 'http://localhost:8081/cart/export/pdf';
// const PAYMENT_API = 'http://localhost:8081/pay';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartSubject= new Subject<void>();
  cart:Cart;
  // cart_products_final:CartItem[]=[];
  cart_products_final = new Set();
  sandbox_URL : string;

  constructor(private http: HttpClient, private router:Router) { }

  addToCart(prodId:string):Observable<any>{

    return this.http.get(ADD_TO_CART_API+prodId, { responseType: 'text' });
    // console.log("postrequest");
  }

  // checkPayment():Observable<any>{
  //   console.log("--------anchal---------");
  //   console.log(PAYMENT_API);
  //   return this.http.post(PAYMENT_API, { responseType: 'text' });
  // }

  deleteFromCart(prodId:string):Observable<any>{
    return this.http.get(DELETE_FROM_CART_API+prodId, { responseType: 'text' });
  }

  addToCart_quantity(prodId:string, quantity:number):Observable<any>{
    return this.http.get(ADD_TO_CART_API+prodId+"/quantity/"+stringify(quantity), { responseType: 'text' });
  }

  async delay(ms: number, result) {
    return new Promise(resolve => setTimeout(() => resolve(result), ms));
  }

  getCartProducts():Observable<Cart>{
    // this.cart_products_final=[];
    // console.log("getrequest");

    return this.http.get<Cart>(CART_GET)
      .pipe(
        map((data:any) =>
          {
              this.cart = data;
              // console.log(data);
              this.cart_products_final.clear();

              // this.cart.cart_cartItem.map(item=>{
              //   // console.log(item);
                // if(item.quantity>0) {
                //   this.cart_products_final.add(item);
                // }
              // })

              let arr = [];
              this.cart.cart_cartItem.forEach((item)=>{
                if(item.quantity>0) {
                  arr.push(item);
                }
              })

              arr.sort((n1,n2) => n1.cartItemId-n2.cartItemId);
              this.cart_products_final.clear();
              arr.map((item)=>{
                this.cart_products_final.add(item);
              })

              // console.log(this.cart_products_final.size);

              return data;
          }

        )
      )
      // .subscribe(
      //   data=>{
      //     this.cart=data;
      //     console.log(this.cart);
      //     // this.cart.cart_cartItem.map(item=>{
      //     //   console.log(item);
      //     //   if(item.quantity>0) this.cart_products_final.push(item);
      //     // })
      //   });

  }

  removeFromCart(prodId:string):Observable<any>{
    // console.log(prodId);
    return this.http.get(REMOVE_FROM_CART_API+prodId, { responseType: 'text' });
  }

  checkout(){
    var mediaType = 'application/pdf';
    this.http.get(receipt_API, { responseType: 'blob' }).subscribe(
      (response) => {
          var blob = new Blob([response], { type: mediaType });
          saveAs(blob, 'report.pdf');
      }

    );
    this.http.delete(CHECKOUT_API).subscribe();
    this.cartSubject.next();
  }


  onSubmit(price,currency, method, intent, description){

    let form_payment : Payment =new Payment();
    form_payment.price = price;
    form_payment.currency = currency;
    form_payment.method = method;
    form_payment.intent = intent;
    form_payment.description = description;

    // console.log(price,currency, method, intent, description);


    // let sandbox_URL;

    this.http.post(PAYMENT_API, form_payment, { responseType: 'text' }).subscribe(
      (data) => {
        // console.log(data);
        window.location.href = data;
        // this.router.navigate([data]);
      }
    );

    // console.log(this.sandbox_URL);

  }

}
