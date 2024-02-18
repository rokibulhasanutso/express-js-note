const express = require('express');
const app = express();
const port = 8000

// send redirect response
app.get('/', (req, res) => {
	
	// append on header 
	res.append('Content-Type', 'text/html')
	res.append('auth-name', 'Rokibul hasan')
	res.append('auth-token', 'jhsdafsd024sfdg0sd54fsadfds')

	// response
	res.send('header data appended')
	res.status(201).end()
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})