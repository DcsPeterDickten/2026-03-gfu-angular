import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Array<Book>, filterText: string = ''): Array<Book> {

    if (!filterText) {
      return books;
    }
    const result = books.filter((book) => this.passtBuchZuFilter(book, filterText));
    console.log({ filterText, result });
    return result;
  }

  passtBuchZuFilter(book: Book, filterText: string): boolean {
    const searchValue = filterText.toLowerCase();
    return book.title.toLowerCase().includes(searchValue);
  }
}
