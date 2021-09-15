import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { BrandCardComponent } from './brand-card.component';

describe('BrandCardComponent', () => {
  let component: BrandCardComponent;
  let fixture: ComponentFixture<BrandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCardComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
