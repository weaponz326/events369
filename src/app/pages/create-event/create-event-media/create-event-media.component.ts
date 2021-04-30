import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/media/media.service';


@Component({
  selector: 'app-create-event-media',
  templateUrl: './create-event-media.component.html',
  styleUrls: ['./create-event-media.component.scss']
})
export class CreateEventMediaComponent implements OnInit {

  eventTitle: string = ''
  eventDate: string = ''

  form: FormGroup = new FormGroup({});
  isLoading: boolean;
  isImageSet: boolean;
  imgSrcList: any[];
  createdImgSrc: string;
  eventId: string;
  isSaving: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private mediaService: MediaService
  ) { 
    this.isLoading = false;
    this.eventId = '';
    this.isSaving = false;
    this.isImageSet = false;
    this.imgSrcList = [];
    this.createdImgSrc = '';

    this.getEventDetails();
  }

  ngOnInit(): void {
    var data: any =  sessionStorage.getItem('created_event')
    data = JSON.parse(data)
    this.eventTitle = data.event[0].title;
    this.eventDate = data.event[0].start_date_time

    this.form = this.formBuilder.group({ event_image: ['', Validators.required] });
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
    this.isImageSet = false;
    // this.mediaService.storeImage(this.f.event_image.value, this.eventId).then(
    //   res => {
    //     if (res) {
    //       this.isLoading = false;
    //       this.imgSrcList.unshift(this.createdImgSrc)
    //       this.isImageSet = false;
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

  onImageSelected(e: any){
    const file:File = e.target.files[0];
    if (file) {
      this.isImageSet = true;

      this.f.event_image.value = file;

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.createdImgSrc = e.target.result;
      }
    }
  }

}
