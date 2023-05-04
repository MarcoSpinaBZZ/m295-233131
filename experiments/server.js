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

// show current time with GET and parameter ?tz=
app.get("/now", (req, res) => {
let timezone = "Europe/Zurich";

if (req.query.tz) {
  timezone = req.query.tz;
}

let date = new Date().toLocaleString("de-CH", { timeZone: timezone });
res.send("Current Time in Timezone " + timezone + " " + date);
});

// show zli website
app.get("/zli", (req, res) => {
    res.redirect("https://www.zli.ch");
});

// list of names
let names = [
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

// add a name to the list
app.get("/name", (req, res) => {
    res.sendFile("/workspaces/m295-233131/experiments/name.html")
});


app.post("/names", (req, res) => {
    let name = req.body.name
    names.push(name)
    res.send(names);
});

// delete a name from the list
app.delete('/name', multer().none(), (req, res) => {
    console.log(req.body.name);
    names = names.filter((name) => name !== req.body.name);
    console.log(names);
    res.sendStatus(204);
  });


// static html file
app.get("/html", (req, res) => {
    res.sendFile("/workspaces/m295-233131/experiments/server.html");
});

// image
app.get("/image", (req, res) => {
    res.sendFile("/workspaces/m295-233131/experiments/conan smile gif.gif");
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

// secret 2
app.get("/secret2", (req, res) => {
    const auth = req.get("Authorization")
    if (auth == "Basic aGFja2VyOjEyMzQ=") {
    res.sendFile("/workspaces/m295-233131/experiments/name.html");
    } else {res.sendStatus(401);
}});

// static xml file
app.get("/xml", (req, res) => {
    res.sendFile("/workspaces/m295-233131/experiment/server.xml");
});

// JSON file
app.get("/me", (req, res) => {
    res.sendFile("/workspaces/m295-233131/experiments/server.json");
});

// chuck norris API
app.get("/chuck", async (req, res) => {
    await fetch('https://api.chucknorris.io/jokes/random', options)
    .then(response => response.json())
    .then(joke => res.send(joke.value.replace("Chuck Norris", req.query.name)));
});


app.listen(port, () => {
    console.log(`Server ist gestartet :`);
});
