class Media {
  // Definition here
  toString() {
    return 'Media object';
  }
}

export class Book extends Media {
  constructor(title, author) {
    super();
    this.title = title;
    this.author = author;
  }

  pageCount = 400;
  #publisher = 'Harper Collins';

  #getPublisher() {
    return this.#publisher;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  toString() {
    super.toString();
    return this.title + ' by ' + this.author;
  }
}

// eslint-disable-next-line no-unused-vars
let exampleBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
