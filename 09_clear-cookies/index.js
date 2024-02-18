const express = require('express');
const app = express();
const port = 8000

// set cookie
app.get('/', (req, res) => {

	// set cookies
	res.cookie('name', 'Rokibul hasan')
	res.cookie('age', 22)
	res.cookie('occupation', 'E. Engr')

	res.send('set your cookies successfully')
	res.status(200).end()
})

// clear cookies
app.get('/remove-cookie', (req, res) => {

	// clear cookies
	res.clearCookie('age')
	res.clearCookie('occupation')

	res.send('remove your cookies successfully')
	res.status(200).end()
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})