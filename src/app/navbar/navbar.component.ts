import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { ProductService } from '../services/product.service';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  title="Navbar";
  toggle:boolean=true;

  constructor(private tokenStorageService: TokenStorageService,private productService: ProductService,
    private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    AOS.init();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });
    // window.location.reload();
  }

  getPageName(category : string){
    this.productService.getPageName(category);
  }

  onCart(){

    if (!this.isLoggedIn)
    {
      Swal.fire({
        icon: 'warning',
        title: 'Please Login First',
        confirmButtonColor: "#106EEA"
      })

      this.router.navigate(['/login-signup']);
    }

  }

  onClick(){
    // this.toggle=!this.toggle;
    this.toggle=false;
    //this.onClick2();
  }
  onClick2(){
    this.toggle=true;
    // this.toggle=true;
  }
}
