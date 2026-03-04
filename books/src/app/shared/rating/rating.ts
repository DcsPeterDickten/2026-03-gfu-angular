import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating implements OnChanges {
  // DATA DOWN!
  @Input()
  stars: number = 1; // 1 - 5

  @Input()
  id: string = '1234567890';

  // EVENTS UP!
  @Output()
  plusWasClicked = new EventEmitter<string>();

  @Output()
  minusWasClicked = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Rating ngOnChanges', changes);
  }

  plus() {
    console.log('Rating plus', this.stars);
    this.plusWasClicked.emit(this.id);
  }

  minus() {
    console.log('Rating minus', this.stars);
    this.minusWasClicked.emit(this.id);
  }
}
