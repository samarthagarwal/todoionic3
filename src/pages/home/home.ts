import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, PopoverController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private modalCtrl: ModalController, private popoverCtrl: PopoverController) {

  }

  gotoOffice() {
    this.userProvider.setUserData("s@a.com", "Samarth");
    this.navCtrl.push("PetersPage");
  }

  showModal() {
    let modal = this.modalCtrl.create("ModalpagePage", {});

    modal.onDidDismiss((data) => {
      console.log(data)
    })

    modal.present();
  }

  showPopover(myEvent) {
    let popover = this.popoverCtrl.create("PopoverPage");

    popover.onDidDismiss((data) => {
      if(data == null) {
        return;
      }
      console.log(data.selected + " selected!");
    })

    popover.present({
      ev: myEvent 
    });
  }

}
