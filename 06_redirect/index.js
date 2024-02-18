const express = require('express');
const app = express();
const port = 8000

// send redirect response
app.get('/', (req, res) => {
	res.redirect('/new-file')
})

app.get('/new-file', (req, res) => {
	res.send('this is a new file')
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})