import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { CovidMoreInfoComponent } from './covid-more-info.component';

describe('CovidMoreInfoComponent', () => {
  let component: CovidMoreInfoComponent;
  let fixture: ComponentFixture<CovidMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidMoreInfoComponent ],
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
