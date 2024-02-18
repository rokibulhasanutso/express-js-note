const express = require('express');
const app = express();
const port = 8000

// send redirect response
app.get('/', (req, res) => {

	// set cookies
	res.cookie('name', 'Rokibul hasan')
	res.cookie('age', 22)
	res.cookie('occupation', 'E. Engr')
	res.send('set your cookies successfully')
	res.status(200).end()
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})