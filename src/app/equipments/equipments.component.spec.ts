import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../services/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EquipmentsComponent } from './equipments.component';
import { SortPipe } from '../sort.pipe';
import { SearchPipe } from '../search.pipe';
import { AppModule } from '../app.module';


describe('EquipmentsComponent', () => {
  let component: EquipmentsComponent;
  let fixture: ComponentFixture<EquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsComponent,SortPipe,SearchPipe ],
      imports:[RouterTestingModule,HttpClientTestingModule,HttpClientModule,AppModule],
      providers:[ProductService,HttpClientTestingModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
