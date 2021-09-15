import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brands';
import {brands} from "../../assets/data/brands.json";
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit {

  brandList: any;

  constructor(private productService: ProductService) {
      this.brandList = brands;
      // console.log(this.brandList);
   }

  ngOnInit(): void {


  }

  getMedicineBrand(brandName : string){
    this.productService.getPageName( "medicine/" + brandName);
  }


}
