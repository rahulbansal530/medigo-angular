import { Component, OnInit } from '@angular/core';
// import { Brand } from '../models/brands';
// import {brands} from "../../assets/data/brands.json";

// import brands from "../../assets/data/"

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  // brandList: any;
  carousel_pic:string;
  category_icon:string;

  constructor() {
      // this.brandList = brands;
      // console.log(this.brandList);
   }

  ngOnInit(): void {
    this.carousel_pic = "/assets/offers/medicine.png";
    this.category_icon = "fa fa-plus-square";

  }

}
