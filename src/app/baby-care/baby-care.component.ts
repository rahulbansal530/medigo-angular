import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-baby-care',
  templateUrl: './baby-care.component.html',
  styleUrls: ['./baby-care.component.scss']
})
export class BabyCareComponent implements OnInit {

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

    this.category_name = "Baby Care";
    this.carousel_pic = "/assets/offers/baby.png";
    this.category_icon = "fa fa-child";

    this.productService.findAllBabyCareProducts().subscribe(data => {
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
