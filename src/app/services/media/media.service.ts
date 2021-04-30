import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private headers: HttpHeaders;
  private formHeaders: HttpHeaders;
  
  private getImagesUrl: string;
  private storeImageUrl: string;
  private deleteImageUrl: string;

  constructor(private http: HttpClient, private endpoint: EndpointService) {
    this.headers = this.endpoint.headers();
    this.formHeaders = this.endpoint.headers(true);
    this.getImagesUrl = this.endpoint.apiHost + '/v1/get_event_images/';
    this.storeImageUrl = this.endpoint.apiHost + '/v1/store_event_image';
    this.deleteImageUrl = this.endpoint.apiHost + '/v1/delete_event_image/';
  }

  storeImage(image: File, eventId: any): Promise<any> {
    console.log(this.storeImageUrl);
    console.log(eventId);
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('event_id', eventId);

      this.http.post<any>(this.storeImageUrl, formData, { headers: this.formHeaders }).subscribe(
        res => {
          console.log('store_image_ok: ', res);
          if (_.toLower(res.message) == 'ok') {
            resolve(res.message);
          }
          else {
            resolve(0);
          }
        },
        err => {
          console.error('store_image_error: ', err);
          reject(err);
        }
      );
    });
  }

}
