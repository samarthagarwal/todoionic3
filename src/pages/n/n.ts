import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-n',
  templateUrl: 'n.html',
})
export class NPage {

  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, private camera: Camera) {
  }

  getLocation() {

    console.log("Getting location!");

    this.geo.getCurrentPosition().then((value) => {
      console.log(value);
    }).catch((err) => {
      console.log(err);
    })

  }

  takePicture() {

    let options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetHeight: 400,
      targetWidth: 400,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.image = "data:image/jpeg;base64," + imageData;
    }).catch((err) => {
      console.log(err);
    })

  }

}
