import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetdataService {
 
    baseURL = 'https://5ca8624dc91d3d0014d7cd7d.mockapi.io/portal/login'

  constructor(private httpCall: HttpClient) { }

  getTotalTweeets(){
      return this.httpCall.get(this.baseURL);
  }
}
