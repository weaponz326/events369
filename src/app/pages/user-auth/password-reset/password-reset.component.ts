import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthService } from '../../../services/user-auth.service'


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  errorMsg: String = "";

  resetForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      password: new FormControl('', Validators.required),
      passwordConfirmation: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.resetForm.value);

    this.auth.resetPassword(this.resetForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.id) this.router.navigateByUrl('/validation_prompt');
        },
        err => {
          console.log(err);
          this.errorMsg = err.error.message;
        }
      );
  }

}
