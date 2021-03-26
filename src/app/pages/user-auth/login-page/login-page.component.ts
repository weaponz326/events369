import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthService } from '../../../services/user-auth/user-auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isSending: boolean = false;
  errorMsg: String = "";

  loginForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.isSending = true;

    this.auth.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.id) this.router.navigateByUrl('/phone_authentication');
        },
        err => {
          console.log(err);
          this.isSending = false;
          this.errorMsg = err.error.message;
        }
      );
  }


}
