import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BooksvService } from '../../booksv.service';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class BookListCompnent{    
    showBooks : any = [];
    nName = "";
    nDesc = "";
    showUpdate: Boolean;
    constructor (private bl : BooksvService){
      this.showBooks = this.bl.bookdobs;
      console.log(this.showBooks);
      
    }
    
    updateBook(book){
        this.bl.name = this.nName;
        this.bl.desc = this.nDesc
        
        this.bl.update(book);
    }
    deleteBook(book){
        this.bl.delete(book);
    }
}   