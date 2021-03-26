import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://events369.logitall.biz/api/v1/';

  createBasicInfo(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'create_event', event);      
  }

}
