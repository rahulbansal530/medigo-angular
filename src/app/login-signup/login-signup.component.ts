import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  form_login: any = {
    username: null,
    password: null
  };

  form_signup: any = {
    firstname:null, lastname:null, username:null, email:null, password:null, contact:null, business_name:null, address:null, gst_no:null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage_login = '';

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage_signup = '';
  toggle=true;

  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }


  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });


  }


  onSubmit_login(): void {
    const { username, password } = this.form_login;

    this.authService.login(username, password).subscribe(
      data => {

        // console.log(data);

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        // this.router.navigate(['/home']);
        // this.reloadPage();
        this.router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
      },
      err => {
        this.errorMessage_login = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  onSubmit_signup(): void {
    const { firstname, lastname, username, email, password, contact, business_name, address, gst_no } = this.form_signup;

    this.authService.register(firstname, lastname, username, email, password, contact, business_name, address, gst_no).subscribe(
      data => {
        // console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // console.log(this.form_signup);
        this.reloadPage();
      },
      err => {
        this.errorMessage_signup = err.error.message;
        this.isSignUpFailed = true;
      }
    );

    // this.router.navigate(['/login-signup']);
  }


  reloadPage(): void {
    window.location.reload();
  }

  changeToggle() {
    this.toggle=!this.toggle;
  }

}
