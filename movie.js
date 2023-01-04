export class Movie {
  constructor(title, genre, rating, description) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.description = description;
  }

  equals(other) {
    return (
      other.title == this.title &&
      other.genre == this.genre &&
      other.rating == this.rating &&
      other.description == this.description
    );
  }
}
