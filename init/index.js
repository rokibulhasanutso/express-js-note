const express = require('express');
const app = express();
const port = 800

app.get('/', (req, res) => {
	// Send back a simple response
	res.send('Welcome to express js')
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})