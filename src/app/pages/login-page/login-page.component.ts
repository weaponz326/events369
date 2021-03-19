import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserAuthService } from '../../services/user-auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorMsg: String = "";

  loginForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);

    this.auth.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);        
        },
        err => {
          console.log(err);
          this.errorMsg = err.error.message;
        }
      );
  }

}
