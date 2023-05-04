import express from "express";
import cors from "cors";
import { findAll, findByISBN, insert, replace, remove } from "./books.js";

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

app.listen(port, () => {
    console.log(`Server ist gestartet :)`);
});