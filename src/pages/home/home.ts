import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    town:string
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.location = {
      town: 'mombasa'
    }
    this.weatherProvider.getWeather(this.location.town).subscribe(weather => {
      this.weather = weather.current_observation;
    });
  }

}
