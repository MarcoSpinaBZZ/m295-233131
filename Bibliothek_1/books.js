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

let loans = [
    {
        id: "1",
        customer_id: "1",
        isbn: "10-1758-9937-1",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-07-01T00:00:00.000Z"
    },
    {
        id: "2",
        customer_id: "1",
        isbn: "0-8347-8520-7",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-07-05T00:00:00.000Z"
    },
    {
        id: "3",
        customer_id: "1",
        isbn: "0-6063-5481-6",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-07-11T00:00:00.000Z"
    },
    {
        id: "4",
        customer_id: "2",
        isbn: "0-5345-9930-3",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-07-12T00:00:00.000Z"
    },
    {
        id: "5",
        customer_id: "2",
        isbn: "0-1722-6813-3",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-07-18T00:00:00.000Z"
    },
    {
        id: "6",
        customer_id: "2",
        isbn: "0-1210-9922-9",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-07-20T00:00:00.000Z"
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



export function findAllLoans() {
    return loans;
}

export function findByLoan(id) {
    return loans.find((l) => l.id == id);
}

export function borrowNewBook(loan) {
    loans = [...loans, loan];
}

export function changeDateOfLoan(loan) {
    loans = loans.map((l) => l.id == loan.id ? loan : l);
}