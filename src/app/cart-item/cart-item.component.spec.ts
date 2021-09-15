import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { CartItem } from '../models/cartItem';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  //   it('should increase the quantity', () => {
  //    component.cartItem = {
  //     cartItemId: "1",
  //     quantity: 2,
  //     product: {
  //       prodId: "1",
  //       categoryName: "string",
  //       brand: "string",
  //       name: "string",
  //       description: "string",
  //       image: "string",
  //       costPrice: "string",
  //       discountedPrice: "string",
  //       discountedPercentage: "string",
  //       expiryDate: "string"
  //     }
  //    }
  //    component.increaseQuantity();
  //   expect(component.cartItem.quantity).toBe(3);
  // });

});
