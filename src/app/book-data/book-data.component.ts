import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data-editable.component.html',
  styleUrls: ['./book-data.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class BookDataComponent implements OnInit {
  bookDialog: boolean;
  submitted: boolean;
  isNew: boolean;
  // totalRecords: number;
  // loading: boolean;
  books: Book[];
  cols: any[];
  book = new Book();
  // datasource: Book[];
  clonedBooks: { [s: string]: Book; } = {};
  constructor( private primengConfig: PrimeNGConfig, private bookService: BookService, private  messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit(): void {
    this.bookDialog = false;
    this.isNew = false;
    this.bookService.getBooks().then(
      books => {
      this.books = books;
      // this.totalRecords = books.length;
      // this.datasource = books;
      });
    this.cols = [
      { field: 'author', header: 'Author' },
      { field: 'title', header: 'Title' },
      { field: 'year', header: 'Year' },
      { field: 'country', header: 'Country' },
      { field: 'language', header: 'Language' },
      { field: 'pages', header: 'Pages' }
    ];
    // this.loading = true;
    this.primengConfig.ripple = true;
  }
  // tslint:disable-next-line:typedef
  /*loadBooks(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
        this.books = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }*/
  // tslint:disable-next-line:typedef
  onRowSelect(event) {
    this.book = event.data;
    this.messageService.add({severity: 'info', summary: 'Book Selected', detail: this.book.title + '(' + this.book.year + ')'});
  }
  // tslint:disable-next-line:typedef
  onRowEditInit(book: Book) {
    this.clonedBooks[book.title] = {...book};
  }
  // tslint:disable-next-line:typedef
  onRowEditSave(book: Book) {
      delete this.clonedBooks[book.title];
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Book is updated'});
  }
  // tslint:disable-next-line:typedef
  onRowEditCancel(book: Book, index: number) {
    this.books[index] = this.clonedBooks[book.title];
    delete this.clonedBooks[book.title];
  }
  // tslint:disable-next-line:typedef
  openNew() {
    this.book = new Book();
    this.submitted = false;
    this.bookDialog = true;
    this.isNew = true;
  }
  // tslint:disable-next-line:typedef
  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }
  // tslint:disable-next-line:typedef
  saveBook() {
    this.submitted = true;
    if (this.isNew)
    {
      this.books.push(this.book);
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Book Created', life: 3000});
    }
    else {
      this.books[this.findIndexByTitle(this.book.title)] = this.book;
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Book Updated', life: 3000});
    }
    this.books = [...this.books];
    this.bookDialog = false;
    this.book = new Book();
  }
  // tslint:disable-next-line:typedef
  deleteBook(book: Book) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter(val => val.title !== book.title);
        this.book = new Book();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Book Deleted', life: 3000});
      }
    });
  }
  // tslint:disable-next-line:typedef
  editBook(book: Book) {
    this.book = {...book};
    this.isNew = false;
    this.bookDialog = true;
  }
  findIndexByTitle(title: string): number {
    let index = -1;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        index = i;
        break;
      }
    }
    return index;
  }
}
