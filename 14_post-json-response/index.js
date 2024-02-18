const express = require('express');
const app = express();
const bodyparser = require('body-parser'); // install package yarn add body-parser
const port = 8000

// after install body parser then define or use
app.use(bodyparser.json());

// object data
const data = [
	{
		"name": "Rokibul Hasan",
		"city": "Jamalpur",
		"occupation": "Engineer"
	},
	{
		"name": "Hridoy Hasan",
		"city": "Tangail",
		"occupation": "Doctor"
	},
	{
		"name": "Humairah",
		"city": "Shylet",
		"occupation": "Student"
	}
]

// send post json response
app.post('/', (req, res) => {
	const jsonData = req.body
	const jsonSringify = JSON.stringify(jsonData)

	res.send(jsonSringify)
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})