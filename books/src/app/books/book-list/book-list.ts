import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from '../../shared/rating/rating';
import { Book } from '../book';
import { BookFilterPipe } from '../book-filter-pipe';

@Component({
  selector: 'books-list',
  imports: [FormsModule, CurrencyPipe, BookFilterPipe, Rating],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('BookList constructor');
  }

  coverIsVisible = true;
  bildbreite: number = 75;

  books: Array<Book> = [
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

  filterText: string = '';

  public ngOnInit(): void {
    console.log('BookList ngOnInit');
    // Daten laden!
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('BookList ngOnChanges', changes);
  }

  public ngOnDestroy(): void {
    console.log('BookList ngOnDestroy');
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  minus(id: string) {
    console.log('BookList minus', id);
    const book = this.getBook(id);
    if (book) {
      book.rating = Math.max(1, book.rating - 0.1);
    }
  }

  plus(id: string) {
    console.log('BookList plus', id);
    const book = this.getBook(id);
    if (book) {
      book.rating = Math.min(5, book.rating + 0.1);
    }
  }

  getBook(isbn: string): Book | null {
    return this.books.find((book) => book.isbn === isbn) || null;
  }
}
