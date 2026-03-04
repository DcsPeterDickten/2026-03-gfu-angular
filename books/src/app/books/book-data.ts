import { Injectable, inject } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

export const URL_BOOKS = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root',
})
export class BookData {
  http: HttpClient = inject(HttpClient);

  constructor() {}

  public async getBooks(): Promise<Array<Book>> {
    const obsBooks = this.http.get<Array<Book>>(URL_BOOKS);
    return await firstValueFrom(obsBooks);
  }

  public async getBook(isbn: string): Promise<Book> {
    const obsBooks = this.http.get<Book>(`${URL_BOOKS}/${isbn}`);
    return await firstValueFrom(obsBooks);
  }

  public async deleteBook(isbn: string): Promise<Book> {
    const obsBooks = this.http.delete<Book>(`${URL_BOOKS}/${isbn}`);
    return await firstValueFrom(obsBooks);
  }

  // public getBookList(): Observable<Array<Book>> {
  //   let result: Array<Book> = [];
  //   const obsBooks = this.http.get<Array<Book>>('http://localhost:3000/books');
  //   obsBooks.subscribe(
  //     (books) => {
  //       result.push(...books);
  //     },
  //     (error) => {
  //       console.error('Error fetching books', error);
  //     },
  //     () => {
  //       console.log('Complete fetching books');
  //       return result;
  //     },
  //   );

  //   //console.log('getBookList', result, typeof result);

  //   //return await firstValueFrom(obsBooks);
  //   // return result;
  // }
}
