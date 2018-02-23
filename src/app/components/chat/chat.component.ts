import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('message') redel: ElementRef;
  userEmail: User;
  messagesCollection: AngularFirestoreCollection<any>;
  messages: Observable<any[]>;
  status = '';
  constructor(public afs: AngularFirestore, private afa: AngularFireAuth) {
    this.userEmail = this.afa.auth.currentUser;
   }

  ngOnInit() {

    this.getChatData();

  }
  // create new message
  newMessage(message) {
    this.messagesCollection.add({
      mess: message,
      user: this.userEmail.email,
      date: Date()
    }).catch((err) => {
      console.log(err);
    });
    this.redel.nativeElement.value = '';
  }

  // candeactive fire when input empty
  canDeactive() {
    if (this.redel.nativeElement.value) {
      return false;
    }else {
      return true;
    }
  }
  // get and create new database
  getChatData() {
    this.messagesCollection = this.afs.collection<any>('chat_messages' , s => s.orderBy('date'));
    this.messages = this.messagesCollection.valueChanges();
  }



}
