const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => {
	res.send(`<h1>Welcome to my website!</h1>`);
})

// specific level middleware for about
app.use('/about', (req, res, next) => {
	console.log("I am a middleware work for specific route for about page.");
	next();
})

app.get('/about', (req, res) => {
	res.send(`<h1>This is about</h1>`);
})

app.get('/contact', (req, res) => {
	res.send(`<h1>This is contact page.</h1>`);
})


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})