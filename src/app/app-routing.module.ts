import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { CartComponent } from './cart/cart.component';
import { ChatComponent } from './chat/chat.component';
import { CovidEssentialsComponent } from './covid-essentials/covid-essentials.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LogoutComponent } from './logout/logout.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'covid',component:CovidEssentialsComponent},
  {path:'brands',component:BrandPageComponent},
  {path:'equipments',component:EquipmentsComponent},
  {path:'personal-care',component:PersonalCareComponent},
  {path:'baby-care',component:BabyCareComponent},
  {path:'medicines/:brandName',component:MedicineComponent},
  // {path:'medicines',component:MedicineComponent},
  {path:'product-detail/:prodId',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'logout',component:LogoutComponent},
  {path:'faqs',component:FaqComponent},
  {path:'chat',component:ChatComponent},
  {path:'payment',component:PaymentComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
