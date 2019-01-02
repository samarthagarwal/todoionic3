import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "s@a.com";
  password: string = "121212";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((userCredential) => {
      console.log(userCredential);
      this.navCtrl.push("TodoPage");
    }).catch((err) => {
      console.log(err);
    });
  }

  gotoSignup() {
    this.navCtrl.pop();
  }

}
