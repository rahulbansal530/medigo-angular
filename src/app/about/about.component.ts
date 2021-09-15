import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var $:any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  //script for swiper
  ngOnInit(): void {
    AOS.init();
    $(".carousel").swipe({

      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

      },
      allowPageScroll:"vertical"

    });



}
}
