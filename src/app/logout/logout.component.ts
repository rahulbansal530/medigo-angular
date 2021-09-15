import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router:Router) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    // !!this.tokenStorageService.getToken().subscribe(
    //   data=>{
    //    this.isLoggedIn=data;
    //   }
    // );

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      // this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigate(['/login-signup']);
  }

}
