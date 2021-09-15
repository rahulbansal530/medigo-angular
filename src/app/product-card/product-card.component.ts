import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  content?:string;

   @Input() product: Product;
   private roles: string[] = [];
   isLoggedIn = false;
   username?: string;

  constructor(private productService: ProductService, private tokenStorageService:TokenStorageService,
    private router:Router, private cartService:CartService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      // console.log(this.username);

    }

  }


  addToCart(prodId:string){

    if(!this.isLoggedIn){

      Swal.fire({
        icon: 'warning',
        title: 'Please Login First',
        confirmButtonColor: "#106EEA"
      })

      this.router.navigate(['/login-signup']);
      return;
    }
    this.cartService.addToCart(prodId).subscribe();
    // this.cartService.cartSubject.next();
    Swal.fire({
      icon: 'success',
      title: 'Item added to Cart Successfully',
      confirmButtonColor: "#106EEA"
    })

  }


}
