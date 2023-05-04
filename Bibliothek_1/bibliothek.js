import express from "express";
import cors from "cors";
import { findAll, findByISBN, insert, replace, remove } from "./books.js";
import { findAllLoans, findByLoan, borrowNewBook, changeDateOfLoan } from "./books.js";

const app = express();
const port = 3001;

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// show all books
app.get("/books", (req, res) => {
    res.send(findAll());
});

// show one book
app.get("/books/:isbn", (req, res) => {
    res.send(findByISBN(req.params.isbn));
});

// create book
app.post("/books", (req, res) => {
    const newBook = [
        {
            isbn: "7",
            title: "Japanese book",
            year: 2021,
            author: "Mr. Nippon"
        }
    ];
    insert(newBook);
    res.sendStatus(201);
});

// replace book
app.put("/books/:isbn", (req, res) => {
    let isbn = req.params.isbn;
    const replacedBook ={
            isbn: isbn,
            title: "Ruby book",
            year: 1995,
            author: "Mr. Diamond"
        };
    replace(replacedBook);
    res.sendStatus(204);
});

// delete book
app.delete("/books/:isbn", (req, res) => {
    remove(req.params.isbn);
    res.sendStatus(204);
})



// show all loans
app.get("/lends", (req, res) => {
    res.send(findAllLoans());
});

// show one loan
app.get("/lends/:id", (req, res) => {
    res.send(findByLoan(req.params.id));
});

// lend new book
app.post("/lends", (req, res) => {
    const newLoan = [
        {
            id: "7",
            customer_id: "2",
            isbn: "0-1562-1863-8",
            borrowed_at: new Date().toISOString(),
            returned_at: "2023-07-23T00:00:00.000Z"
        }
    ];
    borrowNewBook(newLoan);
    res.sendStatus(201);
});

// change date of loan
app.patch("/lends/:id", (req, res) => {
    const changedLoan ={
            id: req.params.id,
            customer_id: "1",
            isbn: "10-1758-9937-1",
            borrowed_at: new Date().toISOString(),
            returned_at: ""
        };
    changeDateOfLoan(changedLoan);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server ist gestartet :)`);
});