import { Component, OnInit } from '@angular/core';
  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';
  // core version + navigation, pagination modules:
  import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);
  import * as AOS from 'aos';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    const swiper=new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

  }


}
