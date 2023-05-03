import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// show current time
app.get("/now", (req, res) => {
    res.send(new Date().toISOString());
});

// show zli website
app.get("/zli", (req, res) => {
    res.redirect("https://www.zli.ch");
});

// list of names
const namen = [
    "Fritz",
    "Lambo",
    "Nikola",
    "Hans",
    "Peter",
    "Gustav",
    "Fridolin",
    "Frida",
    "Linda",
    "Karl",
    "Walter",
    "Jessie",
    "Jeff",
    "Josef",
    "Hubert",
    "Hugo",
    "Max",
    "Muster",
    "Johannes",
    "Günther",
  ];

function randomName(names) {
    for (let i = 0; i < 2; i++) {
        const random = names[Math.floor(Math.random() * names.length)];
        return random
    }
}
app.get("/name", (req, res) => {
    res.send(randomName(namen));
});

// einen Endpunkt /html, der statische HTML aus einer Datei vom Server zurück gibt
app.get("/html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Server ist gestartet :`);
});
