import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  quantity:number=10;
  isLoggedIn = false;
  subscription:Subscription;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
    private cartService : CartService, private router:Router, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();


    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('prodId');

    this.productService.getProductDetailsId(productIdFromRoute);

    this.productService.getProductDetails().subscribe(data => {
      this.product = data;
      // console.log(this.product);
    });

    this.subscription = this.productService.productSubject.subscribe(
      ()=>{
        this.delay(100,"")
        .then(any=>{
          const routeParams = this.activatedRoute.snapshot.paramMap;
          const productIdFromRoute = routeParams.get('prodId');
          this.productService.getProductDetailsId(productIdFromRoute);
            this.productService.getProductDetails().subscribe(data => {
              this.product = data;
              // console.log(this.product);
            });
        })
      }
    );


  }

  async delay(ms: number, result) {
    return new Promise(resolve => setTimeout(() => resolve(result), ms));
  }

  increaseQuantity() {
    this.quantity++;
    if(this.quantity>100) {
      Swal.fire({
        icon: 'error',
        title: 'Maximum Limit Reached',
        text: 'Quantity cannot be more than 100!',
        confirmButtonColor: "#106EEA"
      })
      this.quantity=100;
    }
  }

  decreaseQuantity() {
    this.quantity--;
    if(this.quantity<10) {
      Swal.fire({
        icon: 'error',
        title: 'Quantity cannot be less than 10',
        text: 'Please enter a valid quantity',
        confirmButtonColor: "#106EEA"
      })
      this.quantity=10;
    }
  }

  checkZero() {
    if(this.quantity<=10) {
      Swal.fire({
        icon: 'error',
        title: 'Quantity cannot be less than 10',
        text: 'Please enter a valid quantity',
        confirmButtonColor: "#106EEA"
      })
      this.quantity=10;
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

    this.cartService.addToCart_quantity(prodId,this.quantity).subscribe();
    Swal.fire({
      icon: 'success',
      title: 'Item added to Cart Successfully',
      confirmButtonColor: "#106EEA"
    })

  }

}
