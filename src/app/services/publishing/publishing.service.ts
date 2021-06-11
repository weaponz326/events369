import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class PublishingService {

  private headers: HttpHeaders;
  publishUrl: string;
  rsvpUrl: string;
  

  constructor(private http: HttpClient, private endpoint: EndpointService) {
    this.headers = this.endpoint.headers();
    this.publishUrl = this.endpoint.apiHost + '/v1/publish_event/';
    this.rsvpUrl = this.endpoint.apiHost + 'v1/rsvping_form/';
  }
  
  publishEvent(eventId: any, body: any): Promise<any> {
    console.log(body);

    return new Promise((resolve, reject) => {
      let url = this.publishUrl + eventId;
      this.http.post<any>(url, JSON.stringify(body), { headers: this.headers}).subscribe(
        res => {
          console.log('publish_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(res);
          }
          else {
            resolve(0);
          }
        },
        err => {
          console.error('publish_error: ', err);
          reject(err);
        }
      );
    });
  }

  createRsvpForm(eventId: any, rsvpForm: any, formId: number): Promise<any> {
    let body = {
      form_fields: rsvpForm,
      form_id: formId
    }
    console.log(body);
    
    return new Promise((resolve, reject) => {
      let url = this.rsvpUrl + eventId;
      this.http.post<any>(url, JSON.stringify(body), { headers: this.headers}).subscribe(
        res => {
          console.log('publish_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(res);
          }
          else {
            resolve(0);
          }
        },
        err => {
          console.error('publish_error: ', err);
          reject(err);
        }
      );
    });
  }

}
