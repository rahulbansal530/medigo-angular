import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  products: Product[];
  category_name:string;
  category_icon:string;
  carousel_pic:string;

  //variables for search and sort
  searchString:string='';
  sortByPara:string='discountedPrice';
  sortDirection='asc';

  constructor(private http:HttpClient, private productService: ProductService) { }

  ngOnInit(): void {

    this.category_name = "Equipments";
    this.carousel_pic = "/assets/offers/equipments.png";
    this.category_icon = "fa fa-stethoscope";

    this.productService.findAllEquipmentProducts().subscribe(data => {
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
