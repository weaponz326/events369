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
  saved: boolean;
  form: FormGroup = new FormGroup({});
  imgSrc: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private eventDetailsService: EventDetailsService
  ) {
    this.isLoading = false;
    this.saved = false;
    this.imgSrc = '../../../../assets/images/placeholder-image.png';
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
      banner: ['', Validators.required],
    });
  }

  create(): void {
    this.saved = true;
    if (this.form.valid) {
      console.log('form is valid');
      this.isLoading = true;
      // this.eventDetailsService.createEventDetails(this.getFormData()).then(
      //   res => {
      //     if (res) {
      //       this.isLoading = false;
      //       this.router.navigateByUrl('/create_event/organizers');
      //     }
      //     else {
      //       this.isLoading = false;
      //       alert('didnt create');
      //     }
      //   },
      //   err => {
      //     console.log(err);
      //     this.isLoading = false;
      //   }
      // );
    }
  }

  onFileSelected(e: any){
    const file:File = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("thumbnail", file);

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      }
    }
  }

  getFormData(): any {
    const data = {
      banner: this.f.banner.value,
    };
    return data;
  }

}
