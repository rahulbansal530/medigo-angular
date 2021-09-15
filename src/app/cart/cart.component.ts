import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  cart:Cart;
  // cart_products:CartItem[];
  // cart_products_final:CartItem[]=[];
  cart_products_final = new Set();

  subscription:Subscription;

  ngOnInit(): void {

    this.cartService.getCartProducts()
          .subscribe(data=>{
            this.cart=data;
          });
    this.cart=this.cartService.cart;
    this.cart_products_final=this.cartService.cart_products_final;
    // console.log("oninit");
    this.subscription = this.cartService.cartSubject.subscribe(
      ()=>{
        this.delay(100,"").then(any=>{
          //task after delay.

            this.cartService.getCartProducts()
              .subscribe(data=>{
                // console.log("cartcomponent");
                this.cart=data;
                // console.log(this.cartService.cart_products_final.size);
                if(this.cartService.cart_products_final.size!==this.cart_products_final.size){
                  // window.location.reload();
                  // this.cart_products_final=[];
                  this.cart_products_final = this.cartService.cart_products_final;
                  // console.log(this.cart_products_final.length );
                  // console.log(this.cartService.cart_products_final.length);


                }
              });

    });

    //       this.cart=this.cartService.cart;
    // this.cart_products_final=this.cartService.cart_products_final;

      }
    );
  }

  async delay(ms: number, result) {
    return new Promise(resolve => setTimeout(() => resolve(result), ms));
  }




}
