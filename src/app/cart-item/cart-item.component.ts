import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {


  @Input() cartItem:CartItem;

  quantity:number;
  constructor(private cartService:CartService) {
    // this.quantity= this.cartItem.quantity;
  }

  ngOnInit(): void {
    // console.log(this.cartItem);
  }
  increaseQuantity() {
    this.cartItem.quantity++;
    this.cartService.addToCart(this.cartItem.product.prodId).subscribe();
    if(this.cartItem.quantity>100) {
      Swal.fire({
        icon: 'error',
        title: 'Maximum Limit Reached',
        text: 'Quantity cannot be more than 100!',
        confirmButtonColor: "#106EEA"
      })
      this.cartItem.quantity=100;
    }
    this.cartService.cartSubject.next();

  }

  decreaseQuantity() {

    if(this.cartItem.quantity>10){
      this.cartService.deleteFromCart(this.cartItem.product.prodId).subscribe();
      this.cartItem.quantity--;
    }
    else{
      if(this.cartItem.quantity<=10) {
        Swal.fire({
          icon: 'error',
          title: 'Quantity cannot be less than 10',
          text: 'Please enter a valid quantity',
          confirmButtonColor: "#106EEA"
        })
        this.cartItem.quantity=10;
      }
    }

    // this.ngOnInit();
    this.cartService.cartSubject.next();

  }

  checkZero() {
    // console.log("changed");
    if(this.cartItem.quantity<=10) {
      Swal.fire({
        icon: 'error',
        title: 'Quantity cannot be less than 10',
        text: 'Please enter a valid quantity',
        confirmButtonColor: "#106EEA",
      })
      this.cartItem.quantity=10;
    }
  }
  content?:string;
  removeFromCart(){
    this.cartService.removeFromCart(this.cartItem.product.prodId).subscribe();
    this.cartService.cartSubject.next();

  }


}
