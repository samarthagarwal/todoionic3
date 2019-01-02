import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherModalPage } from './weather-modal';

@NgModule({
  declarations: [
    WeatherModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherModalPage),
  ],
})
export class WeatherModalPageModule {}
