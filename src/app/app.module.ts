import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedCardsComponent } from './med-cards/med-cards.component';
import { BannerComponent } from './banner/banner.component';
import { PaymentpartnersComponent } from './paymentpartners/paymentpartners.component';
import { AboutComponent } from './about/about.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HomeComponent } from './home/home.component';
import { DealershipsComponent } from './dealerships/dealerships.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CountersComponent } from './counters/counters.component';
import { TeamComponent } from './team/team.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';
import { CovidEssentialsComponent } from './covid-essentials/covid-essentials.component';
import { CovidMarquelComponent } from './covid-marquel/covid-marquel.component';
import { CovidDosdontsComponent } from './covid-dosdonts/covid-dosdonts.component';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';
import { CovidMoreInfoComponent } from './covid-more-info/covid-more-info.component';
import { FooterComponent } from './footer/footer.component';
import { BannerCategoryComponent } from './banner-category/banner-category.component';
import { MedicineComponent } from './medicine/medicine.component';
import { OffersComponent } from './offers/offers.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { BrandCardComponent } from './brand-card/brand-card.component';
import { SearchSortbarComponent } from './search-sortbar/search-sortbar.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { HttpClientModule } from '@angular/common/http';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { LogoutComponent } from './logout/logout.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MedicinesPageComponent } from './medicines-page/medicines-page.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { EquipmentsComponent } from './equipments/equipments.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedCardsComponent,
    BannerComponent,
    PaymentpartnersComponent,
    AboutComponent,
    HeaderTopComponent,
    HomeComponent,
    DealershipsComponent,
    TestimonialsComponent,
    FooterCopyrightComponent,
    FooterLinksComponent,
    ContactUsComponent,
    CountersComponent,
    TeamComponent,
    FeaturesComponent,
    FaqComponent,
    CovidEssentialsComponent,
    CovidMarquelComponent,
    CovidDosdontsComponent,
    CovidStatsComponent,
    CovidMoreInfoComponent,
    FooterComponent,
    BannerCategoryComponent,
    MedicineComponent,
    OffersComponent,
    ProductCardComponent,
    FeaturedProductsComponent,
    ProductDetailComponent,
    CartComponent,
    CartItemComponent,
    BrandPageComponent,
    BrandCardComponent,
    SearchSortbarComponent,
    LoginSignupComponent,
    FeaturedCardComponent,
    LogoutComponent,
    MedicinesPageComponent,
    EquipmentsComponent,
    PersonalCareComponent,
    BabyCareComponent,
    SearchPipe,
    SortPipe,
    ChatComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders, CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
