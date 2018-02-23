import { Component, OnInit, DoCheck } from '@angular/core';
import { BooksvService } from './../../services/booksv.service';
import { Observable } from 'rxjs/Observable';
import { Books } from './../../model/book.model';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../model/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  dataBook: Books[];
  userEmail: User;
  // create a new book is push on database
  newBook: Books = {
    bookid : '',
    title: '' ,
    countPage: null,
    thumb: '',
    descrition: '',
    user: ''
  };
  constructor(private bookService: BooksvService , private auth: AuthService, private ath: AngularFireAuth) {
    this.userEmail = this.ath.auth.currentUser;
  }
    ngOnInit() {
    }
  // get value input and push book on database
  onKey(event) {
    this.bookService.stringSearch = event.target.value;
    this.bookService.getBook().subscribe(
      (data) => {
        this.dataBook = data.items;
      },
      error => console.log('Server error bookcp')
    );
  }
  // add book base new book
  addBook(book) {
    this.newBook.title = book.volumeInfo.title ;
    this.newBook.descrition = book.volumeInfo.description;
    this.newBook.thumb = book.volumeInfo.imageLinks.smallThumbnail;
    this.newBook.user = this.userEmail.email;
    this.bookService.add(this.newBook);
  }

}
