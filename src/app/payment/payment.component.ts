import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cart } from '../models/cart';
import { Payment } from '../models/payment';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  // form_payment:Payment = ;


  form_payment: any = {
    price:null,
    currency:null,
    method:null,
    intent:null,
    description:null
  };

  disPrice : number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.disPrice = this.cartService.cart.discountedPrice;
  }



  onSubmit_pay(){
    // console.log("clicked");

    const { currency, intent, description} = this.form_payment;

    this.cartService.onSubmit(this.disPrice,currency, "paypal", intent, description);


  }

  checkout(){
    Swal.fire({
      icon: 'success',
      title: 'Checkout Successfull',
      // text: 'Order Value : Rs.'+this.cart.discountedPrice.toString(),
      confirmButtonColor: "#106EEA"
    })

    this.cartService.checkout();
    // this.cartService.checkPayment().subscribe();

  }
}
