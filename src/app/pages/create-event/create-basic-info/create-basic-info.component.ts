import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-basic-info',
  templateUrl: './create-basic-info.component.html',
  styleUrls: ['./create-basic-info.component.scss']
})
export class CreateBasicInfoComponent implements OnInit {

  isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  save() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/create_event/schedule');
    }, 3500);
  }

}
