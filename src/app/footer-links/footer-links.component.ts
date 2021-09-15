import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { EmailService } from '../services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit {

  constructor(private emailService:EmailService) { }
  email:string;
  ngOnInit(): void {
    AOS.init();
  }

  onSubscribe(){
    this.emailService.subscribe(this.email);
    Swal.fire({
      icon: 'success',
      title: 'You are now subscribed to MediGo!',
      confirmButtonColor: "#106EEA"
    })
  }

}
