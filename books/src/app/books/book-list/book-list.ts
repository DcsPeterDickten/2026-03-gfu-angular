import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookList implements OnInit, OnChanges, OnDestroy {
  coverIsVisible = true;
  bildbreite: number = 75;
  books: Array<Book> = [];
  filterText: string = '';

  private bookDataService: BookData = inject(BookData);

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('BookList constructor');
  }

  public async ngOnInit(): Promise<void> {
    console.log('BookList ngOnInit');
    // Daten laden!
    await this.loadBooks();
  }

  async loadBooks() {
    this.books = await this.bookDataService.getBooks();
    this.changeDetectorRef.detectChanges();
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
  async deleteBook(isbn: string) {
    await this.bookDataService.deleteBook(isbn);
    await this.loadBooks();
  }
}
