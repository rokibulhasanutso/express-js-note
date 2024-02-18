const express = require('express');
const app = express();
const port = 8000

// send download file response
app.get('/', (req, res) => {
	res.download('./image-file/flower-image.jpg');
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})