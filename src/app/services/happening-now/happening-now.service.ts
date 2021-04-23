import { Injectable } from '@angular/core';
import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HappeningNowService {

  private headers: HttpHeaders;
  getTodaysEventsUrl: string;
  

  constructor(
    private http: HttpClient, 
    private endpoint: EndpointService
    ) 
    {

    this.headers = this.endpoint.headers();
    this.getTodaysEventsUrl =  this.endpoint.apiHost + '/get_todays_events'; 
    
  }

  getTodaysEvents(): Promise<any> {
    return new Promise((resolve, reject) => {
      let todays_events: any[] = [];
      const url = this.getTodaysEventsUrl;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_today_events_ok: ', res);
          todays_events = res;
          resolve(todays_events);
        },
        err => {
          console.log('get_todays_events_error: ', err);
          reject(err);
        }
      );
    });
  }

}
