import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Weather } from '../../models/weather.model';

@IonicPage()
@Component({
  selector: 'page-weather-modal',
  templateUrl: 'weather-modal.html',
})
export class WeatherModalPage {

  weather: Weather;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.weather = this.navParams.get("weather");
    console.log(this.weather);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
