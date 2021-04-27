import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private headers: HttpHeaders;
  archiveEventUrl: string;
  recoverEventUrl: string;
  getUserEventsUrl: string;
  getAllEventsUrl: string;
  getCategoriesUrl: string;
  getCategoryEventsUrl: string;
  
  constructor(private http: HttpClient, private endpoint: EndpointService) {
    this.headers = this.endpoint.headers();
    this.archiveEventUrl = this.endpoint.apiHost + '/v1/archive_event/';
    this.recoverEventUrl = this.endpoint.apiHost + '/v1/recover_event/';
    this.getUserEventsUrl = this.endpoint.apiHost + '/v1/get_user_events_by_status/';
    this.getCategoriesUrl = this.endpoint.apiHost + '/view_categories';
    this.getAllEventsUrl = this.endpoint.apiHost + '/v1/get_all_user_events/';
    this.getCategoryEventsUrl = this.endpoint.apiHost + '/get_events_by_category/';
  }

  archiveEvent(eventId: any): Promise<any> {    
    const url = this.archiveEventUrl + eventId;
    return new Promise((resolve, reject) => {     
      this.http.post<any>(url, null, { headers: this.headers}).subscribe(
        res => {
          console.log('archive_event_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(res.id);            
          }
          else {
            resolve(0);
          }
        },
        err => {
          console.error('archive_event_error: ', err);
          reject(err);
        }
      );
    });
  }

  recoverEvent(eventId: any): Promise<any> {    
    const url = this.recoverEventUrl + eventId;
    return new Promise((resolve, reject) => {     
      this.http.post<any>(url, null, { headers: this.headers}).subscribe(
        res => {
          console.log('recovr_event_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(res.id);            
          }
          else {
            resolve(0);
          }
        },
        err => {
          console.error('recover_event_error: ', err);
          reject(err);
        }
      );
    });
  }

  getUserEvents(status: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let events: any[] = [];
      var userId = sessionStorage.getItem('events_user_id');
      const url = this.getUserEventsUrl + userId + '/' + status;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_user_events_ok: ', res);
          events = res;
          resolve(events);
        },
        err => {
          console.log('get_user_events_error: ', err);
          reject(err);
        }
      );
    });
  }

  getAllEvents(): Promise<any> {
    return new Promise((resolve, reject) => {
      let events: any[] = [];
      var userId = sessionStorage.getItem('events_user_id');
      const url = this.getAllEventsUrl + userId;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_all_events_ok: ', res);
          events = res;
          resolve(events);
        },
        err => {
          console.log('get_all_events_error: ', err);
          reject(err);
        }
      );
    });
  }

  getCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      let categories: any[] = [];
      const url = this.getCategoriesUrl;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_categories_ok: ', res);
          categories = res;
          resolve(categories);
        },
        err => {
          console.log('get_categories_error: ', err);
          reject(err);
        }
      );
    });
  }

  getCategoryEvents(category: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let events: any[] = [];
      const url = this.getCategoryEventsUrl + category;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_category_events_ok: ', res);
          events = res;
          resolve(events);
        },
        err => {
          console.log('get_all_category_error: ', err);
          reject(err);
        }
      );
    });
  }

}
