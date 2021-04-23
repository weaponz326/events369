import { Component, OnInit } from '@angular/core';
import { HappeningNowService } from 'src/app/services/happening-now/happening-now.service';

declare var $: any;
declare var require: any

require('/src/assets/js/slick/slick.min')

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit {

  thumbsSliderOptions: any;
  
  eventsToday: any;

  // slideConfig = {
  //   "slidesToShow": 4, 
  //   "slidesToScroll": 4,
  //   "nextArrow": "<i class='bi bi-chevron-left'></i>",
  //   "prevArrow": "<i class='bi bi-chevron-right'></i>",
  //   };

  constructor(
    private eventsHappeningNow: HappeningNowService
  ) { 
      $(document).ready(function(){
        $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1
        });

        // alert('iam here')
      });
  }

  ngOnInit(): void {
    this.getEventsHappeningNow()

    this.thumbsSliderOptions = {
      items: 1,
    };
  }
 
  getEventsHappeningNow(): void {
    this.eventsHappeningNow.getTodaysEvents().then(
      res => {
        console.log(res);
        this.eventsToday = res.event.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  slidePrevsLiveStream() {

  }

  slideNextLiveStream() {
    
  }

  pauseVideo(id: any) {

  }

  playVideo(id: any) {

  }

  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }


}
