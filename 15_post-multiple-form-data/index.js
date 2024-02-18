const express = require('express');
const app = express();
const bodyparser = require('body-parser'); // install package yarn add body-parser
const getmulter = require('multer');
const multer = getmulter()
const port = 8000

// after install body parser then define or use
app.use(bodyparser.json());
app.use(multer.array());
app.use(express.static('public'))

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