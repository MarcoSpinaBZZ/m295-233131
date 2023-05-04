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

app.get('/', function (request, response, _) {
  // request.session is the object that holds the information of this specific session
  request.session.views = (request.session.views || 0) + 1
  console.log(request.session)

  response.end(request.session.views + ' views')
})

app.listen(port, () => {
  console.log(`Server ist gestartet :)`);
});