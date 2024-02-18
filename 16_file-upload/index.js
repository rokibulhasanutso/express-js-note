const express = require('express');
const app = express();
const multer = require('multer')
const port = 8000

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './uploadFiles')
	},
	filename: (req, file, callback) => {
		callback(null, file.originalname) // originalname means default filename
	}
})

const upload = multer({storage: storage}).single('myfile') // you can choose multiple or single file method

app.post('/', (req, res) => {
	upload(req, res, (err, data) => {
		if (err) {
			return res.end('Error uploading file: ' + err)
		}
		res.end('file uploaded successfully')
	})
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})