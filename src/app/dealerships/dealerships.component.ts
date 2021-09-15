import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dealerships',
  templateUrl: './dealerships.component.html',
  styleUrls: ['./dealerships.component.scss']
})
export class DealershipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.customer-logos').slick('unslick');
    $(document).ready(function(){
      $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 700,
          settings: {
            slidesToShow: 3
          }
        }]
      });
    });
  }

}
