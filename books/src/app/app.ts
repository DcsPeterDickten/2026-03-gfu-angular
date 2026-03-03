import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './books/book-list/book-list';

@Component({
  selector: 'books-root',
  imports: [RouterOutlet, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  name = signal<string | null>('Hallo Bücher!!');
}
