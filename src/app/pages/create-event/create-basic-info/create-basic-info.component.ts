import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-basic-info',
  templateUrl: './create-basic-info.component.html',
  styleUrls: ['./create-basic-info.component.scss']
})
export class CreateBasicInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.router.navigateByUrl('/create_event/schedule');
  }

}
