import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { BasicInfoService } from 'src/app/services/basic-info/basic-info.service';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {

  userEvents: any;
  createdEvents: any;
  publishedEvents: any;
  archivedEvents: any;

  constructor(
    private router: Router,
    private eventsService: EventsService, 
    private basicInfoService: BasicInfoService
  ) { }

  ngOnInit(): void {    
    this.getAllUserEvents();
    this.getUserEvents(0)
    this.getUserEvents(2)
    this.getUserEvents(3)
  }

  getAllUserEvents(): void {
    this.eventsService.getAllUserEvents().then(
      res => {
        console.log(res);
        this.userEvents = res.all_events.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getUserEvents(eventStatus: any): void {
    this.eventsService.getUserEvents(eventStatus).then(
      res => {
        console.log(res);
        if (eventStatus == 0) this.createdEvents = res.all_events.data;
        if (eventStatus == 2) this.publishedEvents = res.all_events.data;
        if (eventStatus == 3) this.archivedEvents = res.all_events.data;
      },
      err => {
        console.log(err);
        return null;
      }
    );
  }

  gotoEdit(eventId: any) {
    console.log(eventId);
    this.saveSelectedEvent(eventId).then(
      ok => {
        if (ok) this.router.navigateByUrl('/edit_event/basic_info')
      },   
    );
  }

  gotoPreview(eventId: any) {
    sessionStorage.setItem('preview_event_id', eventId);
    this.router.navigateByUrl('/event_details');
  }

  saveSelectedEvent(eventId: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.basicInfoService.getCreatedEvent(eventId).then(
        res => {
          console.log(res);
          sessionStorage.removeItem('created_event');
          sessionStorage.setItem('created_event', JSON.stringify(res));
          resolve(true);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  archiveEvent(eventId: any){
    return new Promise((resolve, reject) => {
      this.eventsService.archiveEvent(eventId).then(
        res => {
          console.log(res);
          // TODO: reload page          
          resolve(true);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  recoverEvent(eventId: any){
    return new Promise((resolve, reject) => {
      this.eventsService.recoverEvent(eventId).then(
        res => {
          console.log(res);
          // TODO: reload page          
          resolve(true);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  getEventDateFormatted(date: any) {
    // return moment(date).format('ddd, MMM D, YYYY h:mm A');
    return moment(date).format('MMM d, YYYY');
  }

}
