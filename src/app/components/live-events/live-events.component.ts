import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit {

  thumbsSliderOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.thumbsSliderOptions = {
      items: 1,
    };
  }

}
