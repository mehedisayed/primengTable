import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Book{
  author;
  title;
  year;
  country;
  language;
  pages;
}
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getBooks(){
    return this.http.get<any>('assets/book.json')
      .toPromise()
      .then(res => res.data as Book[])
      .then(data => data);
  }
}
