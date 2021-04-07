import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventDetailsService } from 'src/app/services/event-details/event-details.service';

@Component({
  selector: 'app-create-event-details',
  templateUrl: './create-event-details.component.html',
  styleUrls: ['./create-event-details.component.scss']
})
export class CreateEventDetailsComponent implements OnInit {

  isLoading: boolean;
  isBannerSet: boolean;
  saved: boolean;
  form: FormGroup = new FormGroup({});
  imgSrc: string;

  facebookVisibility: boolean;
  zoomVisibility: boolean;
  youtubeVisibility: boolean;
  meetVisibility: boolean;
  teamsVisibility: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private eventDetailsService: EventDetailsService
  ) {
    this.isLoading = false;
    this.isBannerSet = false;
    this.saved = false;
    this.imgSrc = '../../../../assets/images/placeholder.png';

    this.facebookVisibility = false;
    this.zoomVisibility = false;
    this.youtubeVisibility = false;
    this.meetVisibility = false;
    this.teamsVisibility = false;
  }

  ngOnInit(): void {
    this.initForm();
  }

  previous() {
    this.router.navigateByUrl('/create_event/schedule');
  }

  save() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/create_event/ticketing');
    }, 3500);
  }

  public get f(): any {
    return this.form.controls;
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      phone: ['', [Validators.minLength(12), Validators.maxLength(12)]],      
      hosted_on: [''],
      banner_image: [''],
      organizer: ['', Validators.required],
      facebook_hosting: [''],
      zoom_hosting: [''],
      youtube_hosting: [''],
      meet_hosting: [''],
      teams_hosting: [''],
      facebook_checkbox: [''],
      zoom_checkbox: [''],
      youtube_checkbox: [''],
      meet_checkbox: [''],
      teams_checkbox: [''],
    });
  }

  create(): void {
    var data: any =  sessionStorage.getItem('created_event');
    data = JSON.parse(data);
    var eventId = data.event[0].id;
console.log(this.f.email);
    this.saved = true;
    if (this.form.valid) {
      console.log('form is valid');
      console.log(this.getFormData());
      this.isLoading = true;
      this.eventDetailsService.editEventDetails(this.getFormData(), this.f.banner_image.value, eventId).then(
        res => {
          if (res) {
            this.isLoading = false;
            this.router.navigateByUrl('/edit_event/ticketing');
          }
          else {
            this.isLoading = false;
            alert('didnt create');
          }
        },
        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
    }
  }

  onFileSelected(e: any){
    const file:File = e.target.files[0];
    if (file) {
      this.isBannerSet = true;

      // const formData = new FormData();
      // formData.append("thumbnail", file);

      this.f.banner_image.value = file;

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      }
    }
  }

  getFormData(): any {
    let hostedObject = [
      { "platform": "Facebook", "link": this.f.facebook_hosting.value },
      { "platform": "Zoom", "link": this.f.zoom_hosting.value },
      { "platform": "Youtube", "link": this.f.youtube_hosting.value },
      { "platform": "Meet", "link": this.f.meet_hosting.value },
      { "platform": "Teams", "link": this.f.teams_hosting.value },
    ]

    const data = {
      email: this.f.email.value,
      phone: this.f.phone.value,
      hosted_on: hostedObject,
      organizer: this.f.organizer.value,
    };
    return data;
  }

  setFacebookVisibility(){
    this.facebookVisibility = this.f.facebook_checkbox.value;
  }

  setZoomVisibility(){
    this.zoomVisibility = this.f.zoom_checkbox.value;
  }

  setYoutubeVisibility(){
    this.youtubeVisibility = this.f.youtube_checkbox.value;
  }

  setMeetVisibility(){
    this.meetVisibility = this.f.meet_checkbox.value;
  }

  setTeamsVisibility(){
    this.teamsVisibility = this.f.teams_checkbox.value;
  }

}
