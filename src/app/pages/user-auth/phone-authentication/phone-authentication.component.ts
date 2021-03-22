import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthService } from '../../../services/user-auth.service'


@Component({
  selector: 'app-phone-authentication',
  templateUrl: './phone-authentication.component.html',
  styleUrls: ['./phone-authentication.component.scss']
})
export class PhoneAuthenticationComponent implements OnInit {

  errorMsg: String = "";

  authenticationForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationForm = new FormGroup({
      confirmationCode: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.authenticationForm.value);

    this.auth.authenticatePhone(this.authenticationForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.id) this.router.navigateByUrl('/home');
        },
        err => {
          console.log(err);
          this.errorMsg = err.error.message;
        }
      );
  }

}
