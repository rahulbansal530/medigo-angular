import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { CovidMarquelComponent } from './covid-marquel.component';

describe('CovidMarquelComponent', () => {
  let component: CovidMarquelComponent;
  let fixture: ComponentFixture<CovidMarquelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidMarquelComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMarquelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
