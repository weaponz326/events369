import { Injectable } from '@angular/core';
import { EndpointService } from './../endpoints/endpoint.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersFavoritesService {
  
  private headers: HttpHeaders;
  addToFavoritesUrl: string;
  removeFromFavoritesUrl: string;
  getUserFavoritesUrl: string;
  

  constructor(
    private http: HttpClient, 
    private endpoint: EndpointService
    ) 
    {

    this.headers = this.endpoint.headers();
    this.addToFavoritesUrl = this.endpoint.apiHost + '/v1/add_to_favourites/';
    this.removeFromFavoritesUrl = this.endpoint.apiHost + '/v1/delete_favourite/';
    this.getUserFavoritesUrl = this.endpoint.apiHost + '/v1/get_favourites/'; 
    
  }

  getUserFavorites(userID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let user_favorites: any[] = [];
      const url = this.getUserFavoritesUrl + userID;
      this.http.get<any>(url, { headers: this.headers}).subscribe(
        res => {
          console.log('get_user_favorites_ok: ', res);
          user_favorites = res;
          resolve(user_favorites);
        },
        err => {
          console.log('get_user_favorites_error: ', err);
          reject(err);
        }
      );
    });
  }

}
