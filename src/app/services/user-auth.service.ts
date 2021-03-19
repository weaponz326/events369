import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://events369.logitall.biz/api/';

  regsiterUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register', user) ;      
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', user) ;      
  }

}
