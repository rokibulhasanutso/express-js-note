const express = require('express');
const app = express();
const port = 8000

app.use((req, res, next) => {
	console.log('Hello, I am application level meddileware')
	next() // pass control to the next middleware function in the stack
})

app.get('/', (req, res) => {
	res.send(`<h1>Welcome to my website!</h1>`);
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