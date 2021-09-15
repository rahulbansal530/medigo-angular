import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { TokenStorageService } from '../services/token-storage.service';

import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  //  it('should increase the quantity', () => {
  //    component.quantity=20;
  //    component.increaseQuantity();
  //   expect(component.quantity).toBe(21);
  // });

});
