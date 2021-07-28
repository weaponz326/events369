import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';

@Component({
  selector: 'app-rsvp-user',
  templateUrl: './rsvp-user.component.html',
  styleUrls: ['./rsvp-user.component.scss']
})
export class RsvpUserComponent implements OnInit {

  rsvpData: any;

  isPrefixIncluded: boolean = false;
  isPrefixRequired: boolean = false;
  isFirstNameRequired: boolean = false;
  isFirstNameIncluded: boolean = false;
  isLastNameIncluded: boolean = false;
  isLastNameRequired: boolean = false;
  isGenderIncluded: boolean = false;
  isGenderRequired: boolean = false;
  isEmailIncluded: boolean = false;
  isEmailRequired: boolean = false;
  isPhoneIncluded: boolean = false;
  isPhoneRequired: boolean = false;
  isAddressIncluded: boolean = false;
  isAddressRequired: boolean = false;

  constructor(private rsvp: RsvpService) { }

  ngOnInit(): void {
    this.getRsvpForm();
  }

  getRsvpForm(){
    this.rsvp.getRsvp().then(
      res => {
        console.log(res);
        this.rsvpData = res[0].form_fields;

        this.rsvpData.forEach((data: any) => {
          if(data.field_name == "Prefix"){
            this.isPrefixIncluded = true;
            this.isPrefixRequired = data.required;
          }
          if(data.field_name == "First Name"){
            this.isFirstNameIncluded = true;
            this.isFirstNameRequired = data.required;
          }
          if(data.field_name == "Last Name"){
            this.isLastNameIncluded = true;
            this.isLastNameRequired = data.required;
          }
          if(data.field_name == "Gender"){
            this.isGenderIncluded = true;
            this.isGenderRequired = data.required;
          }
          if(data.field_name == "Email"){
            this.isEmailIncluded = true;
            this.isEmailRequired = data.required;
          }
          if(data.field_name == "Phone No."){
            this.isPhoneIncluded = true;
            this.isPhoneRequired = data.required;
          }
          if(data.field_name == "Address"){
            this.isAddressIncluded = true;
            this.isAddressRequired = data.required;
          }
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
