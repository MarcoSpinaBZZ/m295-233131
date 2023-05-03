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

// static html file
app.get("/html", (req, res) => {
    res.sendFile("/workspaces/m295-233131/express_helloworld/index.html");
});

// image
app.get("/image", (req, res) => {
    res.sendFile("/workspaces/m295-233131/express_helloworld/conan smile gif.gif");
});

// teapot
app.get("/teapot", (req, res) => {
    res.sendStatus(418);
});

// user-agent
app.get("/user-agent", (req, res) => {
    res.send(req.headers["user-agent"]);
});

// secret
app.get("/secret", (req, res) => {
    res.sendStatus(403);
});

// static xml file
app.get("/xml", (req, res) => {
    res.sendFile("/workspaces/m295-233131/express_helloworld/index.xml");
});

// JSON file
app.get("/me", (req, res) => {
    res.sendFile("/workspaces/m295-233131/express_helloworld/index.json");
});

app.listen(port, () => {
    console.log(`Server ist gestartet :`);
});
