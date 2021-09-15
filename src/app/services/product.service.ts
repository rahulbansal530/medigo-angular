import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
import { Brand } from '../models/brands';


// -------------- for CI-CD -------------------

const COVID_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/product/covid';
const FEATURE_PRODUCT_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/product/feature';
const EQUIPMENTS_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/product/equipment';
const PERSONAL_CARE_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/product/personal';
const BABY_CARE_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/product/baby';
const PRODUCT_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/product/';
const PRODUCT_DETAIL_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/producct/';


// -------------- for local -------------------
// const COVID_API = 'http://localhost:8081/product/covid';
// const FEATURE_PRODUCT_API = 'http://localhost:8081/product/feature';
// const EQUIPMENTS_API = 'http://localhost:8081/product/equipment';
// const PERSONAL_CARE_API = 'http://localhost:8081/product/personal';
// const BABY_CARE_API = 'http://localhost:8081/product/baby';
// const PRODUCT_API = 'http://localhost:8081/product/';
// const PRODUCT_DETAIL_API = 'http://localhost:8081/producct/';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  category: string;
  prodId: string;
  brandName : string;
  productSubject = new Subject<void>();
  constructor(private http: HttpClient) { }


  public findAllCovidProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(COVID_API);
  }

  public findAllFeatureProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(FEATURE_PRODUCT_API);
  }

  public findAllEquipmentProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(EQUIPMENTS_API);
  }

  public findAllPersonalCareProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PERSONAL_CARE_API);
  }

  public findAllBabyCareProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(BABY_CARE_API);
  }


  public findAllCategoryProducts(): Observable<Product[]> {
    // this.category = category;

    // console.log(10);
    // console.log(this.http.get<Product[]>(PRODUCT_API + this.category));

    return this.http.get<Product[]>(PRODUCT_API + this.category);
  }

  public findAllMedicineBrandProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_API + "medicine/" + this.brandName);
  }

  public getProductDetails(): Observable<Product> {

    return this.http.get<Product>(PRODUCT_DETAIL_API + this.prodId);
  }

  public getPageName(category: string){
    this.category = category;
  }

  public getProductDetailsId(prodId: string){
    this.prodId = prodId;
    // return this.http.get<Product>(PRODUCT_DETAIL_API + this.prodId);
  }


  public getMedicineBrandName(brandName: string){
    this.brandName = brandName;
  }




}
