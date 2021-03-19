import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-publish',
  templateUrl: './create-event-publish.component.html',
  styleUrls: ['./create-event-publish.component.scss']
})
export class CreateEventPublishComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  previous() {
    this.router.navigateByUrl('/create_event/ticketing');
  }

  publish() {
    console.log('publish');
  }

}
