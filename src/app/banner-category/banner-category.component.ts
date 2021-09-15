import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner-category',
  templateUrl: './banner-category.component.html',
  styleUrls: ['./banner-category.component.scss']
})
export class BannerCategoryComponent implements OnInit {
  @Input() bannerTitle:string | undefined;
  @Input() category_icon:string | undefined;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // const routeParams = this.activatedRoute.snapshot.paramMap;
    // const brandNameFromRoute = routeParams.get('brandName');
    // this.bannerTitle = brandNameFromRoute;
  }

}
