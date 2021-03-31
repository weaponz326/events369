import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';

import { BasicInfo } from 'src/app/models/create-event/basic-info.model';
import { CreateEventService } from 'src/app/services/create-event/create-event.service';

@Component({
  selector: 'app-create-basic-info',
  templateUrl: './create-basic-info.component.html',
  styleUrls: ['./create-basic-info.component.scss']
})
export class CreateBasicInfoComponent implements OnInit {

  isLoading: boolean;
  saveError: boolean;

  basicInfoModel = new BasicInfo('', '', 0, 0, 0, '', moment().format('YYYY-MM-DD hh:mm:ss'), moment().format('YYYY-MM-DD hh:mm:ss'), 0, '', '', 0, 0);

  url: string = ''
  currentRoute: string = ''

  constructor(private router: Router, private createEvent: CreateEventService) {
    this.isLoading = false;
    this.saveError = false;
  }

  ngOnInit(): void {

    this.url = this.router.url
    var ind1 = this.url.indexOf('/');
    var ind2 = this.url.indexOf('/', ind1 + 1);

    this.currentRoute = this.url.substring(ind2 + 1);
    
  }

  save() {
    // console.log(this.basicInfoModel);
    this.isLoading = true;
    
      this.router.navigateByUrl('/create_event/more_details');
    // this.createEvent.createBasicInfo(this.basicInfoModel)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       if(res.message == 'Ok') this.router.navigateByUrl('/create_event/schedule');
    //     },
    //     err => {
    //       console.log(err);
    //       this.isLoading = false;
    //       this.saveError = true;
    //     }
    //   );

    // setTimeout(() => {
    //   this.router.navigateByUrl('/create_event/schedule');
    // }, 3500);
  }

}
