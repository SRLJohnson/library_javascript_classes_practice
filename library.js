class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  /* FIRST ATTEMPT
  getAverageRating() {
    (this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/this._ratings.length;
  }*/

  getAverageRating() {
    const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    return ratingsSum / lengthOfArray;
  }

  toggleCheckedOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runtimeInMinutes) {
    super(title);
    this._director = director;
    this._runtimeInMinutes = runtimeInMinutes;
  }

  get director() {
    return this._director;
  }

  get runtimeInMinutes() {
    return this._runtimeInMinutes;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

//-----------------------------------

const bookJoyLuck = new Book('The Joy Luck Club', 'Amy Tan', 250);

const movieDarjeeling = new Movie('The Darjeeling Limited', 'Wes Anderson', 93);

const cdYoshimi = new CD('Yoshimi Battles the Pink Robots', 'Flaming Lips', 12);

bookJoyLuck.addRating(2);
bookJoyLuck.addRating(5);
bookJoyLuck.addRating(4);

console.log(bookJoyLuck.getAverageRating());

movieDarjeeling.toggleCheckedOutStatus();

console.log(movieDarjeeling._isCheckedOut);

console.log(cdYoshimi);

console.log(bookJoyLuck);

bookJoyLuck._isCheckedOut=true;

console.log(bookJoyLuck);
