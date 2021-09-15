import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-covid-essentials',
  templateUrl: './covid-essentials.component.html',
  styleUrls: ['./covid-essentials.component.scss']
})
export class CovidEssentialsComponent implements OnInit {


  products: Product[];
  category_icon:string;

  //variables for search and sort
  searchString:string='';
  sortByPara:string='discountedPrice';
  sortDirection='asc';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.findAllCovidProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });

    this.category_icon = "fa fa-medkit";
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
