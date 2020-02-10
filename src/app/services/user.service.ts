import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

//Se puede inyectar en otra clase
@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  
  constructor() {

    let myUser: User = {
      nick: "Eduardo",
      subnick: "Subnick Eduardo",
      age: 30,
      email: "jecarvajal@sura.com.co",
      friend: true,
      uid: 1,
      status:"online"

    };

    let myUser2: User = {
      nick: "Juan Eduardo",
      subnick: "Subnick Eduardo",
      age: 30,
      email: "jecarvajal@sura.com.co",
      friend: true,
      uid: 2,
      status:"offline"

    };

    let myUser3: User = {
      nick: "Juan",
      subnick: "Subnick Juan",
      age: 30,
      email: "jecarvajal@sura.com.co",
      friend: true,
      uid: 3,
      status:"busy"
    };

    let myUser4: User = {
      nick: "Laura",
      subnick: "Lady",
      age: 30,
      email: "test@mail.com",
      friend: true,
      uid: 3,
      status:"away"
    };

    let myUserArray: User[] = [
      myUser, myUser2, myUser3, myUser4
    ]

    this.friends = myUserArray;
  }

  getFriends() {
    return this.friends
  }
}
