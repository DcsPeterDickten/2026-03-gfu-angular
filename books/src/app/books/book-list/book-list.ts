import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from '../../shared/rating/rating';
import { Book } from '../book';
import { BookData } from '../book-data';
import { BookFilterPipe } from '../book-filter-pipe';

@Component({
  selector: 'books-list',
  imports: [FormsModule, CurrencyPipe, BookFilterPipe, Rating],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit, OnChanges, OnDestroy {
  coverIsVisible = true;
  bildbreite: number = 75;
  books: Array<Book> = [];
  filterText: string = '';

  private bookDataService: BookData = inject(BookData);

  constructor() {
    console.log('BookList constructor');
  }

  public ngOnInit(): void {
    console.log('BookList ngOnInit');
    // Daten laden!
    this.books = this.bookDataService.getBooks();
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
