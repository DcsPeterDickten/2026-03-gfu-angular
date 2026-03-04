import { Routes } from '@angular/router';
import { Start } from './books/start/start';
import { BookList } from './books/book-list/book-list';
import { BookDetail } from './books/book-detail/book-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: Start },
  { path: 'books', component: BookList },
  { path: 'book/:isbn', component: BookDetail },
  { path: '**', redirectTo: '/start', pathMatch: 'full' },
];
