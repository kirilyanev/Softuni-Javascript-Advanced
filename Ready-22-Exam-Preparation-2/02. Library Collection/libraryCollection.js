class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = []
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length + 1 > this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        const bookData = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        };

        this.books.push(bookData);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.bookName == bookName) {
                if (book.payed == true) {
                    throw new Error(`${bookName} has already been paid.`);
                }
                this.books[i].payed = true;
                return `${bookName} has been successfully paid.`;
            }
        }
        throw new Error(`${bookName} is not in the collection.`);
    }

    removeBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.bookName == bookName) {
                if (this.books[i].payed == false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                }
                this.books.splice(i, 1);
                return `${bookName} remove from the collection.`

            }
        }
        throw new Error("The book, you're looking for, is not found.");
    }

    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            let output = [];
            const firstMessage = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            const sortedBooks = this.books.sort((a, b) => { a.bookName.localeCompare(b.bookName) });

            output.push(firstMessage);

            sortedBooks.forEach(b => {
                let message = `${b.bookName} == ${b.bookAuthor} - ${b.payed == false ? 'Not Paid' : 'Has Paid'}.`;
                output.push(message);
            })
            return output.join('\n');
        }

        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.bookAuthor == bookAuthor) {
                return `${this.books[i].bookName} == ${this.books[i].bookAuthor} - ${this.books[i].payed == false ? 'Not Paid' : 'Has Paid'}.`
            }
        }

        throw new Error(`${bookAuthor} is not in the collection.`);
    }
}


// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
