import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {
  @Input()
  stars: number = 1; // 1 - 5

  @Input()
  id: string = '1234567890';
}
