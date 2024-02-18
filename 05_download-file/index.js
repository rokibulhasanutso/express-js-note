const express = require('express');
const app = express();
const port = 8000

// object data
const data = [
	{
		name: 'Rokibul Hasan',
		city: 'Jamalpur',
		occupation: 'Engineer'
	},
	{
		name: 'Hridoy Hasan',
		city: 'Tangail',
		occupation: 'Doctor'
	},
	{
		name: 'Humairah',
		city: 'Shylet',
		occupation: 'Student'
	}
]

// send json response
app.get('/', (req, res) => {
	res.json(data);
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})