import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signup() {

    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((userCredential) => {
      console.log(userCredential);
      
      //

    }).catch((err) => {
      console.log(err);
    });

  }

  gotoLogin() {
    this.navCtrl.push("LoginPage");
  }

}
