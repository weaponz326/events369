import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-ticketing',
  templateUrl: './create-event-ticketing.component.html',
  styleUrls: ['./create-event-ticketing.component.scss']
})
export class CreateEventTicketingComponent implements OnInit {

  isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  previous() {
    this.router.navigateByUrl('/create_event/more_details');
  }

  save() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/create_event/publishing');
    }, 3500);
  }

}
