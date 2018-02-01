import { Component, OnInit, DoCheck } from '@angular/core';
import { BooksvService } from '../booksv.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  dataBook  = [];
  bCBookTitle : string;
  bCBookCountPage : number;

  constructor(private bookService : BooksvService) { }
  
  ngOnInit() {
    
  }

  onKey(event) {
    this.bookService.stringSearch = event.target.value;
   
    this.bookService.getBook().subscribe(
      (data) => {
        this.dataBook = data.items;
        console.log(data)
      },
      error => console.log("Server error bookcp")
    );

    
  }

  addBook(book){
    this.bookService.add(book);
  }

}
