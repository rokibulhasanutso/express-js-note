const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => {
	let firstname = req.header('fname')
	let lastname = req.header('lname')

	res.end('Name: ' + firstname + ' ' + lastname)
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})