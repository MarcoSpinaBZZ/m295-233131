// npm install express express-session
import express from 'express';
import session from 'express-session';
const app = express();
const port = 3001;


app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(express.json())
app.use(session({
  secret: 'supersecret',
	resave: false,
	saveUninitialized: false,
  cookie: {}
}))

// Caution: this is only an example. NEVER store credentials in code!
const secretAdminCredentials = { email: "desk@library.example", password: "m295" }

app.post("/login", function (req, res) {
	const { email, password } = req.body

	// Check the credentials against store
	if (email?.toLowerCase() == secretAdminCredentials.email && password == secretAdminCredentials.password) {

		// Link email to session
		req.session.email = email

		return res.status(200).json({ email: req.session.email })
	}

  return res.status(401).json({ error: "Invalid credentials" })
})

app.get('/verify', function (req, res) {
	
	// Check if email is set in session
	if (req.session.email) {
		return res.status(200).json({ email: req.session.email })
	}

  return res.status(401).json({ error: "Not logged in" })
})

app.delete('/logout', function (req, res) {

	// Check if email is set in session
	if (req.session.email) {

		// Reset link of session to email
		req.session.email = null

		return res.status(204).send()
	}

  return res.status(401).json({ error: "Not logged in" })
})

app.listen(port, () => {
    console.log(`Server ist gestartet :)`);
  });