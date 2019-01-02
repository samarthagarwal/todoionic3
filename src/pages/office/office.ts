import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage({})
@Component({
  selector: 'page-office',
  templateUrl: 'office.html',
})
export class OfficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {

    // let email = this.navParams.get("email");
    // let username = this.navParams.get("username");

    let email = this.userProvider.getUserData().email;
    let username = this.userProvider.getUserData().username;
    console.log(email + " " + username);

  }

  gotoBack() {
    this.navCtrl.pop();
  }

  

}
