import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-schedules',
  templateUrl: './create-event-schedules.component.html',
  styleUrls: ['./create-event-schedules.component.scss']
})
export class CreateEventSchedulesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  previous() {
    this.router.navigateByUrl('/create_event/basic_info');
  }

  save() {
    this.router.navigateByUrl('/create_event/more_details');
  }

}
