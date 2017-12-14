import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherProvider {
  apiKey = 'c2f1c3b262b367ca';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/Kenya';
  }


  getWeather(town){
    return this.http.get(this.url+'/'+town+'.json')
  }
}
