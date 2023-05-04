let books = [
    {
        isbn: "1",
        title: "Java book",
        year: 2005,
        author: "Mr. Java"
    },
    {
        isbn: "2",
        title: "Python book",
        year: 2009,
        author: "Mr. Python"
    },
    {
        isbn: "3",
        title: "JavaScript book",
        year: 2007,
        author: "Mr. JavaScript"
    },
    {
        isbn: "4",
        title: "HTML book",
        year: 2002,
        author: "Mr. Hatemel"
    },
    {
        isbn: "5",
        title: "Big book",
        year: 2011,
        author: "Mr. Small"
    },
    {
        isbn: "6",
        title: "Hopp book",
        year: 2016,
        author: "Mr. Scotch"
    },
]

export function findAll() {
    return books;
}

export function findByISBN(isbn) {
    return books.find((b) => b.isbn == isbn);
}

export function insert(book) {
    books = [...books, book];
}

export function replace(book) {
    books = books.map((b) => b.isbn == book.isbn ? book : b);
    books = books.map((b) => {
        if(b.isbn == book.isbn) {
            return book;
        } else {
            return b;
        }
    })
}

export function remove(isbn) {
    books = books.filter((b) => b.isbn !== isbn)
}
