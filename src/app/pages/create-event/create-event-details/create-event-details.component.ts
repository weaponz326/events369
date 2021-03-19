import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-details',
  templateUrl: './create-event-details.component.html',
  styleUrls: ['./create-event-details.component.scss']
})
export class CreateEventDetailsComponent implements OnInit {

  isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  previous() {
    this.router.navigateByUrl('/create_event/schedule');
  }

  save() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/create_event/ticketing');
    }, 3500);
  }

}
