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

  set isCheckedOut(isCheckedOut) {
    return this._isCheckedOut = isCheckedOut;
  }
  
  getAverageRating() {
    let ratingSum = this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length;
    return ratingSum;
  }

  toggleCheckOutStatus() {
    if(this._isCheckedOut === false) {
      this._isCheckedOut = true;
    } else {
      this._isCheckedOut = false;}
  }
  
  addRating(newRating) {
    if(0 < newRating < 6) {
      this._ratings.push(newRating);
    }
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
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this.artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

//Nueva Book instance
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
//Cambio el check out status usando el metodo que cree en la clase madre "Media"
historyOfEverything.toggleCheckOutStatus();
//Añado algunos ratings
historyOfEverything.addRating(6);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//Pruebo en la consola
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating());

//Nueva Movie instance
const speed = new Movie('Speed’, ‘Jan de Bont', 116);
