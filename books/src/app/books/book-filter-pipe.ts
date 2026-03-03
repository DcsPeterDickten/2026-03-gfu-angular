import { Pipe, PipeTransform } from '@angular/core';
import { BookData } from './book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: BookData[], filterText: string = ''): BookData[] {
    if (!filterText) {
      return books;
    }
    return books.filter((book) => this.passtBuchZuFilter(book, filterText));
  }

  passtBuchZuFilter(book: BookData, filterText: string): boolean {
    const searchValue = filterText.toLowerCase();
    return book.title.toLowerCase().includes(searchValue);
  }
}
