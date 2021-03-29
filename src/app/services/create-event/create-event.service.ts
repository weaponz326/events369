import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Observable } from 'rxjs'
import { EndpointService } from '../endpoints/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(private http: HttpClient, private endpoint: EndpointService) { }

  private apiUrl = 'http://events369.logitall.biz/api/v1/';
  

  createBasicInfo(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'create_event', event);
  }

}
