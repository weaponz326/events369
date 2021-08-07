import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';
import { UserAccountService } from 'src/app/services/user-account/user-account.service';

@Component({
  selector: 'app-user-tickets-page',
  templateUrl: './user-tickets-page.component.html',
  styleUrls: ['./user-tickets-page.component.scss']
})
export class UserTicketsPageComponent implements OnInit {

  currentUser: any;
  userTickets: any;

  constructor(
    private userAccountsService: UserAccountService,
    private rsvpService: RsvpService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getTickets();
  }

  getUser(): void {
    this.userAccountsService.getCurrentUser().then(
      res => {
        console.log(res);
        this.currentUser = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  getTickets(): void {
    this.rsvpService.getUserTickets().then(
      res => {
        console.log(res);
        this.userTickets = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
