import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId : any;
  friends:User[];
  friend:User;
  price:number = 78.34343434433423124344657;
  date:any = Date.now;
  constructor(private activatedRoute: ActivatedRoute , private userService: UserService ) {// para Aceptar parametros y para usar sercivio de usuarios
    this.friendId = activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.friends = userService.getFriends();
    this.friend = this.friends.find((record)=>{
      return record.uid == this.friendId;
    });
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
