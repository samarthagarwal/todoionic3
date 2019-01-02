import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  email: string;
  username: string;

  constructor() {
    
  }

  getUserData() {
    return {
      email: this.email,
      username : this.username
    };
  }

  setUserData(email, username) {
    this.email = email;
    this.username = username;
  }

}
