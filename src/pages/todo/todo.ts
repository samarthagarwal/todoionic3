import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  userId: string;
  todos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private actionsheetCtrl: ActionSheetController) {

    let currentUser = firebase.auth().currentUser;
    if(currentUser != null) {
      this.userId = currentUser.uid;
      this.getTodos();
    } else {
      this.navCtrl.setRoot("LoginPage");
    }

  }

  getTodos() {

    firebase.firestore().collection("todos")
    .where("todo_owner", "==", this.userId)
    .onSnapshot((data) => {
      console.log(data.docChanges());
      this.todos = data.docs;
    });

    // firebase.firestore().collection("todos")
    // .where("todo_owner", "==", this.userId)
    // .get().then((querySnap) => {
    //   this.todos = querySnap.docs;
    // })

  }

  createTodo() {

    let alert = this.alertCtrl.create({
      title: "New Todo",
      message: "Enter the text for the todo item",
      inputs: [{
        name: "todo_text",
        placeholder: "Pick up clothes from dry-cleaning",
        type: "text"
      }],
      buttons: [{
        text: "Cancel"
      }, {
        text: "Create", 
        handler: (data) => {
          console.log(data);

          firebase.firestore().collection("todos").add({
            "todo_text": data.todo_text,
            "todo_owner": this.userId
          }).then(() => {
            //this.getTodos();
          }).catch((err) => {
            console.log(err);
          })

        }
      }]
    })

    alert.present();

  }

  presentOptions(todo: firebase.firestore.QueryDocumentSnapshot){

    this.actionsheetCtrl.create({
      title: "Select an Action",
      buttons: [{
        text: "Cancel",
        role: "cancel",
      }, {
        text: "Edit",
        handler: () => {
          this.editTodo(todo);
        }
      }, {
        text: "Delete",
        handler: () => {
          this.deleteTodo(todo);
        }
      }]
    }).present();

  }

  deleteTodo(todo: firebase.firestore.QueryDocumentSnapshot) {

    firebase.firestore().collection("todos").doc(todo.id).delete().then(() => {
      //this.getTodos();
    }).catch((err) => {
      console.log(err);
    });

  }

  editTodo(todo: firebase.firestore.QueryDocumentSnapshot) {

    let alert = this.alertCtrl.create({
      title: "Edit Todo",
      message: "Enter the text for the todo item",
      inputs: [{
        name: "todo_text",
        placeholder: "Pick up clothes from dry-cleaning",
        type: "text",
        value: todo.data().todo_text
      }],
      buttons: [{
        text: "Cancel"
      }, {
        text: "Update", 
        handler: (data) => {
          console.log(data);

          firebase.firestore().collection("todos").doc(todo.id).update({
            "todo_text": data.todo_text,
          }).then(() => {
            //this.getTodos();
          }).catch((err) => {
            console.log(err);
          })

        }
      }]
    })

    alert.present();

  }

}
