import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { TokenStorageService } from '../services/token-storage.service';
// import {featured} from './featured_products.json';
import Swal from 'sweetalert2';


declare var $:any;

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  featuredList: Product[];

  isLoggedIn = false;
   username?: string;

  constructor(private productService: ProductService, private tokenStorageService:TokenStorageService,
    private router:Router, private cartService:CartService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.productService.findAllFeatureProducts().subscribe(data => {
      this.featuredList = data;
      // console.log("--------------featuredlist------------------");
      // console.log(this.featuredList);
    });

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
    this.cartService.cartSubject.next();
    Swal.fire({
      icon: 'success',
      title: 'Item added to Cart Successfully',
      confirmButtonColor: "#106EEA"
    })

  }

  onClickFeaturedCard(){
    this.productService.productSubject.next();
  }

}
