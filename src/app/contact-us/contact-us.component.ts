import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../services/contact-us.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {



  form_contactUs: any = {
    name:null,
    email:null,
    message:null,
    contactNo:null
  };

  onSubmit_contactUs(){
    // console.log("clicked");

    const { name, email, message, contactNo} = this.form_contactUs;

    this.contactUsService.onSubmit(name,email,message,contactNo);


  }

  constructor(private contactUsService:ContactUsService) { }

  ngOnInit(): void {
  }

}
