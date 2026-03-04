import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'books-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string | null = 'Hallo Bücher!!';

  constructor() {}
}

// @Bla({
// ..
// })
// ...
