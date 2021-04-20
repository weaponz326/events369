import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private headers: HttpHeaders;
  getUserEventsUrl: string;
  getAllEventsUrl: string;
  getCategoriesUrl: string;
  getCategoryEventsUrl: string;
  
  constructor(private http: HttpClient, private endpoint: EndpointService) {
    this.headers = this.endpoint.headers();
    this.getUserEventsUrl = this.endpoint.apiHost + '/v1/get_user_events_by_status/';
    this.getCategoriesUrl = this.endpoint.apiHost + '/view_categories';
    this.getAllEventsUrl = this.endpoint.apiHost + '/get_events_by_type/1';
    this.getCategoryEventsUrl = this.endpoint.apiHost + '/get_events_by_category/';
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
      const url = this.getAllEventsUrl;
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
