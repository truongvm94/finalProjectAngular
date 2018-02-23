import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Books } from './../../../model/book.model';

@Component({
    selector: 'app-book-add',
    templateUrl: './book-add.component.html',
    styleUrls: ['./book-add.component.css']
})

export class BookAddComponent {
    book: Books = {
        title: '',
        countPage: null,
        descrition: ''
    };
    bookCollection: AngularFirestoreCollection<any> = this.afs.collection('demobook');
    bookDobs = this.bookCollection.valueChanges();
    constructor (private afs: AngularFirestore) {}
    // add new book - insert from input => cancel
    addBook() {
        this.bookCollection.add(this.book).then((docRef) => {
            this.bookCollection.doc(docRef.id).update({
                bookid: docRef.id
            });
        }).catch((er) => {
            console.log(er);
        });
    }
}
