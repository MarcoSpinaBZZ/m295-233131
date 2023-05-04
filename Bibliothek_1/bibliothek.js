import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Server ist gestartet :)`);
});