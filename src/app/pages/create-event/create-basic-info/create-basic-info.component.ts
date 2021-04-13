import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import _ from 'lodash';
import moment from 'moment';
import { BasicInfoService } from 'src/app/services/basic-info/basic-info.service';
import { DatetimeFormatterService } from 'src/app/services/datetime-formatter/datetime-formatter.service';


@Component({
  selector: 'app-create-basic-info',
  templateUrl: './create-basic-info.component.html',
  styleUrls: ['./create-basic-info.component.scss']
})
export class CreateBasicInfoComponent implements OnInit {

  isLoading: boolean;
  saved: boolean;
  form: FormGroup = new FormGroup({});
  categoriesData: any[];
  subCategoriesData: any[];
  recurringStore: string;

  url: string = '';
  currentRoute: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private basicInfoService: BasicInfoService,
    private dtService: DatetimeFormatterService
  ) {
    this.isLoading = false;
    this.saved = false;
    this.categoriesData = [];
    this.subCategoriesData = [];
    this.recurringStore = '0';
  }

  ngOnInit(): void {
    this.initForm();
    this.toggleVenueView();
    this.getCategories();
    this.disableSubcategory();
  }

  public get f(): any {
    return this.form.controls;
  }


  initForm(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      venue: [''],
      gps: [''],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      recurring: ['0'],
      type: ['', Validators.required],
      ticketing: ['', Validators.required],
      category_id: ['', Validators.required],
      subcategory_id: ['', Validators.required],
      tags: [''],
      venue_tobe_announced: [0],
      hosting: ['1']
    });
  }

  create(): void {
    this.saved = true;
    console.log(moment(this.f.start_time.value).format('hh:mm:ss'));
    if (this.form.valid) {
      console.log('form is valid');
      this.isLoading = true;
      // this.router.navigateByUrl('/create_event/more_details');
      this.basicInfoService.createBasicEvent(this.getFormData()).then(
        res => {
          if (res) {
            console.log(res);
            this.isLoading = false;
            this.getCreatedEvent(res);
            console.log(this.getFormData().recurring)
            
            if(this.getFormData().recurring == '1') {
              this.router.navigateByUrl('/create_event/schedule');
            } else {
              this.router.navigateByUrl('/create_event/more_details');
            }
            // this.router.navigateByUrl('/create_event/more_details');
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

  getFormData(): any {
    const data = {
      title: this.f.title.value,
      description: this.f.description.value,
      venue: this.f.venue.value,
      gps: this.f.gps.value,
      start_date: this.dtService.formatDateTime(this.f.start_date.value, this.f.start_time.value),
      end_date: this.dtService.formatDateTime(this.f.end_date.value, this.f.end_time.value),
      recurring: this.f.recurring.value,
      type: this.f.type.value,
      category_id: this.f.category_id.value,
      subcategory_id: this.f.subcategory_id.value,
      tags: this.f.tags.value,
      venue_tobe_announced: this.recurringStore,
      hosting: this.f.hosting.value,
      ticketing: this.f.ticketing.value
    };
    return data;
  }

  setRecurring(value: any): void {
    this.form.controls['recurring'].setValue(value);
  }

  setHosting(value: any): void {
    this.form.controls['recurring'].setValue(value);
  }

  toggleVenueView(): void {
    this.form.controls['venue_tobe_announced'].valueChanges.subscribe(change => {
      console.log(change);
      if (change == true) {
        this.form.controls['venue'].disable();
        this.form.controls['gps'].disable();
        this.recurringStore = '1'
      }
      else if (change == false) {
        this.form.controls['venue'].enable();
        this.form.controls['gps'].enable();
        this.recurringStore = '0'
      }
    });
  }

  disableSubcategory(): void {
    this.form.controls['subcategory_id'].disable();
  }

  enableSubcategory(): void {
    this.form.controls['subcategory_id'].enable();
  }

  getCategories(): void {
    this.basicInfoService.getCategories().then(
      res => {
        console.log(res);
        this.categoriesData = res.categories;
      },
      err => {
        console.log(err);
      }
    );
  }

  getSubcategories(): void {
    this.enableSubcategory();
    this.basicInfoService.getSubcategories(this.f.category_id.value).then(
      res => {
        console.log(res);
        this.subCategoriesData = res.sub_categories;
      },
      err => {
        console.log(err);
      }
    );
  }

  getCreatedEvent(eventId: any): void {
    this.basicInfoService.getCreatedEvent(eventId).then(
      res => {
        console.log(res);
        sessionStorage.setItem('created_event', JSON.stringify(res));
      },
      err => {
        console.log(err);
      }
    );
  }

}
