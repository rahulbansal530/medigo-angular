import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public i:any;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (this.i = 0; this.i < items.length; this.i++) {
    items[this.i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
  }

}
