import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookData {
  public getBooks(): Array<Book> {
    return [
      {
        isbn: '123',
        title: 'Angular 18',
        price: 19,
        rating: 3.5,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
      },
      {
        isbn: '124',
        title: 'Angular 19',
        price: 22,
        rating: 3.6,
        coverUrl: 'https://m.media-amazon.com/images/I/71wlgd2ShsL._AC_UY218_.jpg',
      },
      {
        isbn: '125',
        title: 'Angular 21',
        price: 25,
        rating: 3.7,
        coverUrl: 'https://m.media-amazon.com/images/I/71le4bCnY1L._AC_UY218_.jpg',
      },
    ];
  }
}
