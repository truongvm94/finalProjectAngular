import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BooksvService } from '../../../services/booksv.service';
import { Observable } from 'rxjs/Observable';
import {Books } from './../../../model/book.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../../model/user.model';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class BookListCompnent {
    showBooks: Observable<Books[]>;
    showUpdate: Boolean = false;
    isBookEdit: Books;
    userEmail: User;
    constructor (private bl: BooksvService, private afa: AngularFireAuth) {
      this.showBooks = this.bl.bookdobs;
      // tslint:disable-next-line:no-unused-expression
      this.userEmail = this.afa.auth.currentUser;
    }

    // update title of book type Books
    updateBook(title: HTMLInputElement) {
        this.isBookEdit.title = title.value;
        this.bl.updateBook(this.isBookEdit);
        console.log(this.isBookEdit);
    }

    // delete book type Books
    deleteBook(book: Books) {
        this.bl.delete(book);
    }

    // show book type Books
    showBook(event, bookID: Books) {
        this.showUpdate = true;
        this.isBookEdit = bookID;
    }
}
