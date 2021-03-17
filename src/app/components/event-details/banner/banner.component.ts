import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() bannerImg?: String;
  @Input() title?: String;
  @Input() startDate?: Date;
  @Input() endDate?: Date;
  @Input() venue?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
