export class Book {
  isbn: string = '';
  title: string = '';
  price: number = 0;
  private _rating?: number = 0;
  coverUrl: string = '';

  public set rating(newRating: number) {
    if (newRating < 1 || newRating > 5) {
      throw new Error(`Ungultiges Rating: ${newRating}`);
    }
    this._rating = newRating;
  }

  public get rating(): number {
    return this._rating || 0;
  }
}
