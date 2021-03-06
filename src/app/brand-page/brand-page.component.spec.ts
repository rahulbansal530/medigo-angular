import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { BrandPageComponent } from './brand-page.component';

describe('BrandPageComponent', () => {
  let component: BrandPageComponent;
  let fixture: ComponentFixture<BrandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandPageComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
