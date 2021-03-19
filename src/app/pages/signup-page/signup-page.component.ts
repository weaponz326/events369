import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.registerForm.value);

    this.auth.regsiterUser(this.registerForm.value)
      .subscribe(
        res => {
          console.log(res);        
        },
        err => {
          console.log(err)
        }
      );
  }

}
