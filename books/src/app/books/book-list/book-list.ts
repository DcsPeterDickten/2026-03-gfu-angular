import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  imports: [JsonPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  books = [
    { isbn: 123, title: 'Angular 18', price: 19, rating: 3.5, coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg' },
    { isbn: 124, title: 'Angular 19', price: 22, rating: 3.6, coverUrl: 'https://m.media-amazon.com/images/I/71wlgd2ShsL._AC_UY218_.jpg' },
    { isbn: 125, title: 'Angular 12', price: 25, rating: 3.7, coverUrl: 'https://m.media-amazon.com/images/I/71le4bCnY1L._AC_UY218_.jpg' },
  ];

}
