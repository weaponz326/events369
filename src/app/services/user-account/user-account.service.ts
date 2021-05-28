import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  private headers: HttpHeaders;
  private formHeaders: HttpHeaders;
  editProfileUrl: string;
  getUserUrl: string;
  enableTwoFaUrl: string;
  changePasswordUrl: string;

  constructor(private http: HttpClient, private endpoint: EndpointService) {
    this.headers = this.endpoint.headers();
    this.formHeaders = this.endpoint.headers(true);
    this.editProfileUrl = this.endpoint.apiHost + '/v1/editProfile'; 
    this.getUserUrl = this.endpoint.apiHost + '/user'; 
    this.enableTwoFaUrl = this.endpoint.apiHost + '/v1/enableTwoWayAuth'; 
    this.changePasswordUrl = this.endpoint.apiHost + '/v1/changePassword/'; 
  }

  editProfile(profile: any, photo: File): Promise<any> {
    return new Promise((resolve, reject) => {
      // const formData = new FormData();
      // formData.append('profile', photo);
      // formData.append('firstname', profile.organizer);
      // formData.append('lastname', profile.email);
      // formData.append('country', profile.phone);
      // formData.append('phone', profile.phone);
      // formData.append('usertype', profile.phone);
      // formData.append('dob', profile.phone);
      // formData.append('gender', profile.phone);

      const url = this.editProfileUrl;
      this.http.post<any>(url, JSON.stringify(profile), { headers: this.headers }).subscribe(
        res => {
          console.log('edit_profile_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(res.message); 
          }
          else {
            resolve(0);
          }
        },
        err => {
          console.error('edit_profile_error: ', err);
          reject(err);
        }
      );
    });
  }

  getCurrentUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      let event;
      const url = this.getUserUrl;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_user_ok: ', res);
          event = res;
          resolve(event);
        },
        err => {
          console.log('get_user_error: ', err);
          reject(err);
        }
      );
    });
  }

  enableTwoFA(phone: any): Promise<any> {
    console.log(phone);
    console.log(this.enableTwoFaUrl);
    return new Promise((resolve, reject) => {     
      this.http.post<any>(this.enableTwoFaUrl, JSON.stringify(phone), { headers: this.headers}).subscribe(
        res => {
          console.log('edit_event_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(true);            
          }
          else {
            resolve(false);
          }
        },
        err => {
          console.error('edit_event_error: ', err);
          reject(err);
        }
      );
    });
  }

  changePassword(password: any, userId: any): Promise<any> {
    console.log(password);
    let url = this.changePasswordUrl + userId;
    return new Promise((resolve, reject) => {     
      this.http.post<any>(url, JSON.stringify(password), { headers: this.headers}).subscribe(
        res => {
          console.log('edit_event_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(true);            
          }
          else {
            resolve(false);
          }
        },
        err => {
          console.error('edit_event_error: ', err);
          reject(err);
        }
      );
    });
  }

}
