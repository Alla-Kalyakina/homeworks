class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }
    
    set state(stateNumber) {
        if(stateNumber < 0)
            this._state = 0;
        if(stateNumber > 100)
            this._state = 100;
        else
        this._state = stateNumber;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
    
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
        for (type in this.books[i]) {
            if(this.books[i][type] === value) {
                return this.books[i];
            }
        }
    }
    return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            for (let j in this.books[i]) {
                if(this.books[i][j] === bookName) {
                    return this.books.splice(i, 1);
                }
            }
        }
        return null;
        /*let indexBook = this.books.findIndex(item => item.name === bookName);
        if(indexBook != -1) {
            return this.books.splice(indexBook, 1);
        }
        return null;*/
    }

}

