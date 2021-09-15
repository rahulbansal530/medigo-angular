import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { DealershipsComponent } from './dealerships.component';

describe('DealershipsComponent', () => {
  let component: DealershipsComponent;
  let fixture: ComponentFixture<DealershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealershipsComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
