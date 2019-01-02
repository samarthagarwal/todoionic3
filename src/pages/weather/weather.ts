import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../models/weather.model';
import 'rxjs/add/operator/timeout';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  weatherData: any = {};
  cityName: string = "";
  API_KEY: string = "cbba38253ab422f1ff88ddfd5aa65990";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public toastCtrl: ToastController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private modalCtrl: ModalController) {

  }

  getWeather() {

    if (this.cityName.length == 0) {
      this.toastCtrl.create({
        message: "Please enter a city name.",
        duration: 3000
      }).present();
      return;
    }

    let loading = this.loadingCtrl.create({
      content: "Getting Weather",
    });

    loading.present();

    console.log("Getting weather...");

    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&appid=" + this.API_KEY).timeout(1000).subscribe((data) => {

      loading.dismiss();
      this.weatherData = data;

      let weather: Weather = new Weather(this.weatherData);

      this.modalCtrl.create("WeatherModalPage", {
        weather: weather
      }).present();

    }, (error) => {
      console.log(error);
      loading.dismiss();

      this.alertCtrl.create({
        title: "Oops!",
        message: "An error has occured. Please check the city name again.",
        buttons: [{
          text: "OK"
        }]
      }).present();

    })

  }

}
