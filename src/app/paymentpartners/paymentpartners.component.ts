import { Component, OnInit } from '@angular/core';

//commands for slick
//npm install slick-carousel --save
//npm install ngx-slick-carousel --save
//for slick
declare var $: any;

@Component({
  selector: 'app-paymentpartners',
  templateUrl: './paymentpartners.component.html',
  styleUrls: ['./paymentpartners.component.scss']
})
export class PaymentpartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
     <any> $('.customer-logos').slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 4
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 3
              }
          }]
      });
  });
  }

}
