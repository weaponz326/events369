import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthService } from '../../../services/user-auth.service'


@Component({
  selector: 'app-recovery-email',
  templateUrl: './recovery-email.component.html',
  styleUrls: ['./recovery-email.component.scss']
})
export class RecoveryEmailComponent implements OnInit {

  errorMsg: String = "";
  showPrompt: Boolean = false;

  recoveryForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.recoveryForm = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.recoveryForm.value);

    this.auth.accountRecovery(this.recoveryForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.id) this.showPrompt = true;
        },
        err => {
          console.log(err);
          this.errorMsg = err.error.message;
        }
      );
  }

}
