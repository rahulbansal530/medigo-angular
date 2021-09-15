import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-medicines-page',
  templateUrl: './medicines-page.component.html',
  styleUrls: ['./medicines-page.component.scss']
})
export class MedicinesPageComponent implements OnInit {

  products: Product[];
  // category_name:string;

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) { }

  category_name = this.productService.category;




  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const brandIdFromRoute = routeParams.get('brandId');

    // if(this.category_name === "baby"){
    //   this.category_name = "Baby Care";
    // }
    // else if(this.category_name === "personal"){
    //   this.category_name = "Personal Care";
    // }
    // else if(this.category_name === "equipment"){
    //   this.category_name = "Equipments";
    // }



    // this.productService.findMedicinesByBrand().subscribe(data => {
    //   this.products = data;
    //   console.log(this.products);
    // });
  }


}
