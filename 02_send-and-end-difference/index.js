const express = require('express');
const app = express();
const port = 8000

// what is difference between send and end method
app.get('/', (req, res) => {
	res.send(
		`
		what is difference between send and end method
		<br>
		 *** res.send() ---> response body
		 <br/>
		 *** res.end() ---> response end point...
		`
	)
})

// using send method
app.get('/res-send', (req, res) => {
	res.send('hello, i am response using send method')
})

// using end method
app.get('/res-end', (req, res) => {
	res.end('hello, i am response using end method')
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})