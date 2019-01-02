import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss({
      name: "Peter"
    });
  }

}
