import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HelloPage } from '../pages/hello/hello';
import { UserProvider } from '../providers/user/user';

import { HttpClientModule } from '@angular/common/http';

import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCZiBu6XgJzyLJB0UlD03bZMSAPbT2WB58",
  authDomain: "zeolearn-e7101.firebaseapp.com",
  databaseURL: "https://zeolearn-e7101.firebaseio.com",
  projectId: "zeolearn-e7101",
  storageBucket: "zeolearn-e7101.appspot.com",
  messagingSenderId: "385972179263"
});

@NgModule({
  declarations: [
    MyApp,
    HelloPage, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    Geolocation,
    Camera
  ]
})
export class AppModule {}
