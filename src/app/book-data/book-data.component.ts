import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {
  books: Book[];
  cols: any[];
  title: string;
  book = new Book();
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().then(books => this.books = books);
    this.cols = [
      { field: 'author', header: 'Author' },
      { field: 'title', header: 'Title' },
      { field: 'year', header: 'Year' },
      { field: 'country', header: 'Country' },
      { field: 'language', header: 'Language' },
      { field: 'pages', header: 'Pages' },
    ];
  }
  // tslint:disable-next-line:typedef
  onRowSelect(event) {
    this.title = event.data.title;
    this.book = event.data;
    console.log(event.data);
  }
}
