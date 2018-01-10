import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EnvironmentProvider} from "./environment";

@Injectable()
export class WeatherProvider {
  apiKey: any;
  url;
  constructor(public http: Http, public environmentProvider: EnvironmentProvider ) {
    this.apiKey = this.environmentProvider.provideKey();
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/Kenya';
  }


  getWeather(town){
    return this.http.get(this.url+'/'+town+'.json')
      .map(res => res.json());
  }
}
