import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SponsorsService } from 'src/app/services/sponsors/sponsors.service';
import _ from 'lodash';


@Component({
  selector: 'app-create-event-sponsors',
  templateUrl: './create-event-sponsors.component.html',
  styleUrls: ['./create-event-sponsors.component.scss']
})
export class CreateEventSponsorsComponent implements OnInit {

  eventTitle: string = ''
  eventDate: string = ''

  form: FormGroup = new FormGroup({});
  isLoading: boolean;
  isSponsorSet: boolean;
  imgSrcList: any[];
  createdImgSrc: string;
  eventId: string;
  isSaving: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sponsorsService: SponsorsService
  ) { 
    this.isLoading = false;
    this.eventId = '';
    this.isSaving = false;
    this.isSponsorSet = false;
    this.imgSrcList = [];
    this.createdImgSrc = '';

    this.getEventDetails();
    this.getExistingSponsors();
  }

  ngOnInit(): void {
    var data: any =  sessionStorage.getItem('created_event')
    data = JSON.parse(data)
    this.eventTitle = data.event[0].title;
    this.eventDate = data.event[0].start_date_time

    this.form = this.formBuilder.group({ event_sponsor: ['', Validators.required] });
  }

  public get f(): any {
    return this.form.controls;
  }

  getEventDetails(): any {
    const rawData = sessionStorage.getItem('created_event');
    const eventData = rawData != null ? JSON.parse(rawData) : {};
    this.eventId = eventData.event[0].id;
    console.log(this.eventId);
  }

  create(): void {  
    this.isLoading = false;
    this.imgSrcList.unshift(this.createdImgSrc)
    this.isSponsorSet = false;
    // this.sponsorsService.createSponsor(this.f.event_sponsor.value, this.eventId).then(
    //   res => {
    //     if (res) {
    //       this.isLoading = false;
    //       this.imgSrcList.unshift(this.createdImgSrc)
    //       this.isSponsorSet = false;
    //     }
    //     else {
    //       this.isLoading = false;
    //       alert('oops, didn\'t create');
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //     this.isLoading = false;
    //   }
    // );  
  }

  getExistingSponsors(): any {
    this.sponsorsService.getSponsors(this.eventId).then(
      sponsors => {
        _.forEach(sponsors, (sponsor, i) => {
          this.imgSrcList[i] = 'http://events369.logitall.biz/storage/event_sponsor/' + sponsors[i].url;
          console.log(this.imgSrcList[i]);
        });
      }
    );
  }

  onSponsorSelected(e: any){
    const file:File = e.target.files[0];
    if (file) {
      this.isSponsorSet = true;

      this.f.event_sponsor.value = file;

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.createdImgSrc = e.target.result;
      }
    }
  }

}
