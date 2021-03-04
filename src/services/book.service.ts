import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../app/models/Book';
import {AmazonBook} from '../app/models/AmazonBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getBooks() {
    return this.http.get<any>('assets/book.json')
      .toPromise()
      .then(res => res.data as Book[])
      .then(data => data);
  }
  // tslint:disable-next-line:typedef
  getAmazonBooks() {
    return this.http.get<any>('assets/amazon.books.json')
      .toPromise()
      .then(res => <AmazonBook[]> res.data)
      .then(data => { return data; });
  }
}
