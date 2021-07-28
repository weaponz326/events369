import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';

@Component({
  selector: 'app-rsvp-user',
  templateUrl: './rsvp-user.component.html',
  styleUrls: ['./rsvp-user.component.scss']
})
export class RsvpUserComponent implements OnInit {

  isLoading: boolean;
  isSending: boolean;
  saved: boolean;
  errorMsgs: any;
  form: FormGroup = new FormGroup({});
  formBuilder: any;

  rsvpData: any;

  isPrefixIncluded: boolean = false;
  isFirstNameIncluded: boolean = false;
  isLastNameIncluded: boolean = false;
  isGenderIncluded: boolean = false;
  isEmailIncluded: boolean = false;
  isPhoneIncluded: boolean = false;
  isAddressIncluded: boolean = false;

  constructor(private rsvpService: RsvpService) {
    this.isLoading = false;
    this.isSending = false;
    this.saved = false;
  }

  ngOnInit(): void {
    this.getRsvpForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      prefix: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      phone: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
    })
  }

  public get f(): any {
    return this.form.controls;
  }

  getFormData(): any {
    const data = {};

    if(this.isPrefixIncluded == true) Object.assign(data, {prefix: this.f.prefix.value});
    if(this.isFirstNameIncluded == true) Object.assign(data, {firstname: this.f.firstname.value});
    if(this.isLastNameIncluded == true) Object.assign(data, {lastname: this.f.lastname.value});
    if(this.isGenderIncluded == true) Object.assign(data, {gender: this.f.gender.value});
    if(this.isEmailIncluded == true) Object.assign(data, {email: this.f.email.value});
    if(this.isPhoneIncluded == true) Object.assign(data, {phone: this.f.prefix.value});
    if(this.isAddressIncluded == true) Object.assign(data, {address: this.f.address.value});

    return data;
  }

  getRsvpForm(){
    this.rsvpService.getRsvp().then(
      res => {
        console.log(res);
        this.rsvpData = res[0].form_fields;

        this.rsvpData.forEach((data: any) => {
          if(data.field_name == "Prefix"){
            this.isPrefixIncluded = true;
            if(data.required){
              this.f.prefix?.setValidators(Validators.required);
              this.f.prefix?.updateValueAndValidity();
            }
          }
          if(data.field_name == "First Name"){
            console.log('first name is here')
            this.isFirstNameIncluded = true;
            if(data.required){
              this.f.firstname?.setValidators(Validators.required);
              this.f.firstname?.updateValueAndValidity();
            }
          }
          if(data.field_name == "Last Name"){
            this.isLastNameIncluded = true;
            if(data.required){
              this.f.lastname?.setValidators(Validators.required);
              this.f.lastname?.updateValueAndValidity();
            }
          }
          if(data.field_name == "Gender"){
            this.isGenderIncluded = true;
            if(data.required){
              this.f.gender?.setValidators(Validators.required);
              this.f.gender?.updateValueAndValidity();
            }
          }
          if(data.field_name == "Email"){
            this.isEmailIncluded = true;
            if(data.required){
              this.f.email?.setValidators(Validators.required);
              this.f.email?.updateValueAndValidity();
            }
          }
          if(data.field_name == "Phone No."){
            this.isPhoneIncluded = true;
            if(data.required){
              this.f.phone?.setValidators(Validators.required);
              this.f.phone?.updateValueAndValidity();
            }
          }
          if(data.field_name == "Address"){
            this.isAddressIncluded = true;
            if(data.required){
              this.f.address?.setValidators(Validators.required);
              this.f.address?.updateValueAndValidity();
            }
          }
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(){
    console.log(this.getFormData());
    this.saved = true;

    if (this.form.valid) {
      this.isSending = true;
      this.rsvpService.sendRsvp(this.getFormData())
        .then(
          res => {
            console.log(res);
            this.isSending = false;
          },
          err => {
            console.log(err)
            this.isSending = false;
            this.errorMsgs = err.error;
          }
        );
    }
  }

}
