import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-cancel-event-alert',
  templateUrl: './cancel-event-alert.component.html',
  styleUrls: ['./cancel-event-alert.component.scss']
})
export class CancelEventAlertComponent implements OnInit {

  id: string = '';
  errMsg: string = '';

  constructor(
    private _snackBar: MatSnackBar,
    public modalRef: MdbModalRef<CancelEventAlertComponent>,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    console.log('cancel event id', this.id)
  }

  openSnackBar() {
    this._snackBar.open('Event has been successfully cancelled', 'x', {
      duration: 3000
    });
  }

  cancelEvent() {
    return new Promise((resolve, reject) => {
      this.eventsService.cancelEvent(this.id).then(
        res => {
          console.log(res);
          // TODO: reload page 
          this.openSnackBar();  
          this.modalRef.close();       
          resolve(true);
        },
        err => {
          console.log(err);
          this.errMsg = err
          reject(err);
        }
      );
    });
  }

}
