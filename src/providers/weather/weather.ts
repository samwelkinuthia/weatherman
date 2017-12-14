import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = 'c2f1c3b262b367ca';
  url;
  constructor(public http: HttpClientModule) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/Kenya';
  }

  getWeather(city){
    return this.http.get(this.url+'/'+city+'.json')
      .map(res => res.json());
  }
}
