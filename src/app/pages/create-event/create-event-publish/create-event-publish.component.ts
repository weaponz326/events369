import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishingService } from 'src/app/services/publishing/publishing.service';
import { TicketsService } from 'src/app/services/tickets/tickets.service';
import { BasicInfoService } from 'src/app/services/basic-info/basic-info.service';
import { PrefixNot } from '@angular/compiler';

@Component({
  selector: 'app-create-event-publish',
  templateUrl: './create-event-publish.component.html',
  styleUrls: ['./create-event-publish.component.scss']
})
export class CreateEventPublishComponent implements OnInit {

  isLoading: boolean;
  allowCancel: number = 0;
  cancelRules: number = 0;

  rsvpForm: any[] = [];

  eventTitle: string = ''
  eventDate: string = ''

  eventId: string = '';
  eventBanner: string = '';
  eventDescription: string = '';
  eventStartDate: string = '';
  eventEndDate: string = '';
  eventOrganizer: string = '';
  eventContactEmail: string = '';
  eventContactPhone: string = '';

  eventTickets: any;

  includePrefix: boolean = false;
  requirePrefix: boolean = false;
  includeFirstName: boolean = true;
  requireFirstName: boolean = true;
  includeLastName: boolean = true;
  requireLastName: boolean = true;
  includeGender: boolean = false;
  requireGender: boolean = false;
  includeEmail: boolean = true;
  requireEmail: boolean = true;
  includePhone: boolean = false;
  requirePhone: boolean = false;
  includeAddress: boolean = false;
  requireAddress: boolean = false;

  constructor(
    private router: Router, 
    private publishingService: PublishingService,
    private ticketService: TicketsService,
    private basicInfoService: BasicInfoService
  ) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    var data: any =  sessionStorage.getItem('created_event')
    data = JSON.parse(data)
    this.eventTitle = data.event[0].title;
    this.eventDate = data.event[0].start_date_time;

    this.eventId = data.event[0].id;
    this.eventBanner = data.event[0].banner_image;
    this.eventDescription = data.event[0].description;    
    this.eventStartDate = data.event[0].start_date_time;    
    this.eventEndDate = data.event[0].end_date_time;   
    this.eventOrganizer = data.organizers[0]?.name;    
    this.eventContactEmail = data.event[0].contact_email;    
    this.eventContactPhone = data.event[0].contact_phone;
    
    this.getTickets();
  }

  previous() {
    this.router.navigateByUrl('/create_event/ticketing');
  }

  publish(): void {   
    this.isLoading = true;
    // publish
    let body = {
      allow_cancel: this.allowCancel,
      cancel_rules: this.cancelRules
    } 
    this.publishingService.publishEvent(this.eventId, body).then(
      res => {
        if (res) {
          console.log(res);
          this.isLoading = false;
          if(res.message == 'OK') {            
            this.createRsvpForm();
          }
        }
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );    
  }

  createRsvpForm() {
    this.isLoading = true;
    this.fillRsvpForm();
    console.log(this.rsvpForm);

    this.publishingService.createRsvpForm(this.eventId, this.rsvpForm, 0).then(
      res => {
        if (res) {
          console.log(res);
          this.isLoading = false;
          if(res.message == 'OK') {
            this.saveCreatedEvent(this.eventId).then(
              ok => {
                if (ok) this.router.navigateByUrl('/user_events');;
              }                               
            );
          }
        }
      },
      err => {
        console.log(err);
        this.isLoading = false;
        this.rsvpForm = [];
      }
    );
  }

  fillRsvpForm() {
    if(this.includePrefix == true) {
      this.rsvpForm.push({ field_name: "Prefix", required: this.requirePrefix });
    }
    if(this.includeFirstName == true) {
      this.rsvpForm.push({ field_name: "First Name", required: this.requireFirstName });
    }
    if(this.includeLastName == true) {
      this.rsvpForm.push({ field_name: "Last Name", required: this.requireLastName });
    }
    if(this.includeGender == true) {
      this.rsvpForm.push({ field_name: "Gender", required: this.requireGender });
    }
    if(this.includeEmail == true) {
      this.rsvpForm.push({ field_name: "Email", required: this.requireEmail });
    }
    if(this.includePhone == true) {
      this.rsvpForm.push({ field_name: "Phone No.", required: this.requirePhone });
    }
    if(this.includeAddress == true) {
      this.rsvpForm.push({ field_name: "Address", required: this.requireAddress });
    }
  }

  getTickets(): any {
    this.ticketService.getTickets(this.eventId).then(
      tickets => {
        console.log(tickets);

        this.eventTickets = tickets;
        // _.forEach(tickets, (ticket) => {
        //   this.createdTicketList.push(ticket);
        // });
      }
    );
  }

  saveCreatedEvent(eventId: any): Promise<boolean> {
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

}
