import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUs } from '../models/contactUs';

// for ci/cd
const CONTACTUS_API = 'https://medigojavabackend-amxbp6pvia-el.a.run.app/contactUs';

// for local
// const CONTACTUS_API = 'http://localhost:8081/contactUs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {


  constructor(private http:HttpClient) { }



  onSubmit(name,email,message,contactNo){

    let form_contact : ContactUs =new ContactUs();
    form_contact.name = name;
    form_contact.email = email;
    form_contact.message = message;
    form_contact.contactNo = contactNo;

    // console.log(form_contact.name);

    return this.http.post(CONTACTUS_API, form_contact, httpOptions).subscribe();
  }

}
