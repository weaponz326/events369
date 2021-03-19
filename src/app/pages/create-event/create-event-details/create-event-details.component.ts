import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-details',
  templateUrl: './create-event-details.component.html',
  styleUrls: ['./create-event-details.component.scss']
})
export class CreateEventDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  previous() {
    this.router.navigateByUrl('/create_event/schedule');
  }

  save() {
    this.router.navigateByUrl('/create_event/ticketing');
  }

}
