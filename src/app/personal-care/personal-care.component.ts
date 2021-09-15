import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-personal-care',
  templateUrl: './personal-care.component.html',
  styleUrls: ['./personal-care.component.scss']
})
export class PersonalCareComponent implements OnInit {

  products: Product[];
  category_name:string;
  category_icon:string;
  carousel_pic:string;

  //variables for search and sort
  searchString:string='';
  sortByPara:string='discountedPrice';
  sortDirection='asc';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.category_name = "Personal Care";
    this.carousel_pic = "/assets/offers/personal.png";
    this.category_icon = "fa fa-heartbeat";

    this.productService.findAllPersonalCareProducts().subscribe(data => {
      this.products = data;
    });
  }

  //sort logic
  onSortDirection(event:string){
    switch(this.sortDirection) {
       case "asc": {
          this.sortDirection='asc';
          break;
       }
       case "desc": {
          this.sortDirection='desc';
          break;
       }
    }
  }

}
