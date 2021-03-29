import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Observable } from 'rxjs'
import { BasicInfo } from 'src/app/models/create-event/basic-info.model';
import { EndpointService } from '../endpoints/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  private headers: HttpHeaders;
  private apiUrl: string;
  
  constructor(private http: HttpClient, private endpoint: EndpointService) {
    this.headers = this.endpoint.headers();
    this.apiUrl = 'http://events369.logitall.biz/api/v1/';
  }

  
  // authToken = new HttpHeaders().set('Authorization', sessionStorage.getItem('events_auth_token'));
  // headers = { Token: this.authToken };

  createBasicInfo(event: BasicInfo): Observable<any> {
    // const form = new FormData();
    // form.append('title', event.title);
    // form.append('description', event.description);
    // form.append('type', event.type.toString());
    // form.append('start_date', event.start_date);
    // form.append('end_date', event.end_date);
    // form.append('gps', event.gps);
    // form.append('hosting', event.hosting.toString());
    // form.append('recurring', event.recurring.toString());
    // form.append('category_id', event.category_id.toString());
    // form.append('subcategory_id', event.subcategory_id.toString());
    // form.append('tags', event.tags);
    // form.append('venue', event.venue);
    // form.append('venue_tobe_announced', event.venue_tobe_announced.toString());

    // console.log(form.get('start_date'));

    return this.http.post<any>(this.apiUrl + 'create_event', JSON.stringify(event), { headers: this.headers });
  }

}
