import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { HttpClient } from '@angular/common/http/';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Books } from './book/book.model';

@Injectable()
export class BooksvService {
  // booksCollection: AngularFirestoreCollection<Books> ;
  // books: Observable<Books[]> ;
  stringSearch: string;
  dbPath: string = "https://www.googleapis.com/books/v1/volumes?q=";
  // show book
  booktitle : string;
  bookcountpage: number;
  // custormize book
  name : string = "";
  desc : string = "";

  bookcollection: AngularFirestoreCollection<any> = this.afs.collection('demobook');
  bookdobs = this.bookcollection.valueChanges();
  

  constructor(private http : HttpClient, private afs : AngularFirestore) {}

  getBook() : Observable<any>{
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + this.stringSearch);
  }

  add(b){
    console.log(b,"my bbbb")
    this.bookcollection.add({
      name: b.volumeInfo.title,
      pagecount : b.volumeInfo.pageCount,
      thumb: b.volumeInfo.imageLinks.smallThumbnail,
      desc: b.volumeInfo.description
    }).then((docRef) => {
      this.bookcollection.doc(docRef.id).update({
        bookid: docRef.id
      })
    }).catch((err) => {  
      console.log(err);
    })
      
   
  }

  update(bid) {
    this.bookcollection.doc(bid.bookid).update({
      name : this.name,
      desc : this.desc
    }).then(() => {
      console.log("updated");
    })
  }

  delete(bid){
    this.bookcollection.doc(bid.bookid).delete().then(() => {
      console.log("deleted");
    })
  } 
}
