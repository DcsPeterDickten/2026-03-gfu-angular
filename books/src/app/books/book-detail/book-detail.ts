import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookData } from '../book-data';
import { Book } from '../book';

@Component({
  //  selector: 'book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetail {
  isbn: string = '';
  private bookDataService: BookData = inject(BookData);
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.route.params.subscribe(async (params) => {
      console.log('BookDetail constructor', params);
      this.isbn = params['isbn'];
      this.book = await this.bookDataService.getBook(this.isbn);
      this.changeDetectorRef.detectChanges();
    });
  }
}
