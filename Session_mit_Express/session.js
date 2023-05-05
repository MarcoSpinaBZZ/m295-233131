// npm install express-session
import express from 'express';
import session from 'express-session';
const app = express();
const port = 3001;

app.use(session({
  secret: 'supersecret',
	resave: false,
	saveUninitialized: true,
  cookie: {}
}))

app.get('/', function (req, res, _) {
  // request.session is the object that holds the information of this specific session
  req.session.views = (req.session.views || 0) + 1
  console.log(request.session)

  res.end(req.session.views + ' views')
})

// enter & save name of session
app.post("/name", (req, res) => {
  req.session.name = req.body.name;
  res.send("Name saved");
});

// get name of session


// delete name of session


app.listen(port, () => {
  console.log(`Server ist gestartet :)`);
});