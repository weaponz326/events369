import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit, AfterViewInit {

  dataUrl: string;
  dataContent: any;
  eventContent: any;
  speakersContent: any;
  scheduleContent: any;
  pricingContent: any;
  organisersContent: any;
  sponsorsContent: any;

  description: any ;
  bannerImg: any ;
  eventTitle: any ;
  startDate: any ;
  endDate: any ;
  venue: any ;
  contactPhone: any;
  contactEmail: any

  constructor(private http: HttpClient) { 
    this.dataUrl = 'http://events369.logitall.biz/api/get_event_data/18';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getData();
  }

  dataCall() {
    return this.http.get(this.dataUrl);
  }

  getData() {
    this.dataCall()
      .subscribe(
        res => {
          console.log(res);
          this.dataContent = res;
          this.eventContent = this.dataContent.event[0];
          this.speakersContent = this.dataContent.hosts;
          this.scheduleContent = this.dataContent.schedule;
          this.pricingContent = this.dataContent.tickets;
          this.organisersContent = this.dataContent.organizers;
          this.sponsorsContent = this.dataContent.sponsors;
          console.log(this.sponsorsContent.length);
          
          this.description = this.eventContent.description;
          this.eventTitle = this.eventContent.title;
          this.startDate = this.eventContent.start_date_time;
          this.endDate = this.eventContent.end_date_time;
          this.venue = this.eventContent.venue;
          this.contactPhone = this.eventContent.contact_phone;
          this.contactEmail = this.eventContent.contact_email;
          this.bannerImg = this.eventContent.banner_image;
        },
        err => {
          console.log(err)
        }
      );
  }

}
