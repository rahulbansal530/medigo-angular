import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  products: Product[];
  category_name:string;
  carousel_pic:string;


  //variables for search and sort
  searchString:string='';
  sortByPara:string='discountedPrice';
  sortDirection='asc';

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const brandNameFromRoute = routeParams.get('brandName');

    this.productService.getMedicineBrandName(brandNameFromRoute);

    this.productService.findAllMedicineBrandProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });

    this.category_name = "Medicines - " + brandNameFromRoute;
    this.carousel_pic = "/assets/offers/personal.png";

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
