import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {

  toast: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
    
  }

  async showLoading() {

    let loading = this.loadingCtrl.create({
      content: "Loading...",
      showBackdrop: true,
    });
    loading.present();
    
    console.log("Long running task started!")
    await this.makeNetworkCall();

    console.log("Long running task finished!")
    loading.dismiss();

  }

  showToast () {
    this.toast = this.toastCtrl.create({
      message: "This is a toast notification",
      duration: 5000,
      showCloseButton: true,
      closeButtonText: "Close",
      position: "top"
    })
    
    this.toast.present();
  }

  makeNetworkCall() {
    return new Promise((resolve, reject) => {
      console.log("Inside long running task!")
      setTimeout(() => {
        resolve();
      }, 5000);
    })
  }

  showAlert() {

    let alert = this.alertCtrl.create({
      title: "Are you sure?",
      subTitle: "",
      message: "Are you sure that you want to delete this message?",
      buttons: [{
        text: "No",
        role: "cancel",
        handler: () => {
          
        }
      }, {
        text: "Yes",
        handler: (data) => {
          if(data.password != null && data.password.trim().length == 0) {
            return false;
          }
          
          console.log("user pressed yes", data);
        }
      }],
      inputs: [{
        type: "password",
        placeholder: "password",
        name: "password"
      }]
    });

    alert.present();

  }

  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Choose a service",
      subTitle: "",
      buttons: [{
        text: "Facebook",
        handler: () => {
          console.log("Facebook selected")
        }
      }, {
        text: "Twitter", 
        handler: () => {
          console.log("Twitter selected")
        }
      }, {
        text: "Instagram",
        handler: () => {
          console.log("Instagram selected")
        }
      }, {
        text: "Cancel",
        role: "cancel",
        handler: () => {
          console.log("Cancel selected")
        }
      }],
    });

    actionSheet.present();
  }

}
