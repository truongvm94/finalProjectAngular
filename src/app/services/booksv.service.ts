import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http/';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Books } from './../model/book.model';
// import { Book } from './book/book';

@Injectable()
export class BooksvService {
  // my book
  bookCollection: AngularFirestoreCollection<Books>;
  books: Observable<Books[]>;
  bookDoc: AngularFirestoreDocument<Books>;
  // end my book

  stringSearch: string;
  dbPath = 'https://www.googleapis.com/books/v1/volumes?q=';

  booktitle: string;
  bookcountpage: number;
  // custormize book


  bookcollection: AngularFirestoreCollection<Books> = this.afs.collection('demobook');
  bookdobs: Observable<Books[]> = this.bookcollection.valueChanges();


  constructor(private http: HttpClient, private afs: AngularFirestore) { }
  getBook(): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.stringSearch);
  }

  add(aBook: Books) {
    // console.log(b, 'my book');
    this.bookcollection.add(aBook).then((docRef) => {
      this.bookcollection.doc(docRef.id).update({
        bookid: docRef.id
      });
    }).catch((err) => {
      console.log(err);
    });


  }

  updateBook(uBook: Books) {
    this.bookDoc = this.afs.doc(`demobook/${uBook.bookid}`);
    this.bookDoc.update(uBook);
  }

  delete(dBook: Books) {
    this.bookDoc = this.afs.doc(`demobook/${dBook.bookid}`);
    this.bookDoc.delete();
  }
}
