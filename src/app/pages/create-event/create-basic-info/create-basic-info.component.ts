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

  constructor(private router: Router, private createEvent: CreateEventService) {
    this.isLoading = false;
    this.saveError = false;
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.basicInfoModel);
    this.isLoading = true;
    
      this.router.navigateByUrl('/create_event/schedule');
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
