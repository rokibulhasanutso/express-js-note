const express = require('express');
const app = express();
const port = 8000

// using status code method

// series 2xx
// 200 ok
// if request and response operation is successfully then statuscode is 200
app.get('/', (req, res) => {
	res.status(200).end('Standard response for successful HTTP requests, statuscode 200 or ok')
})

// 201 created
// The request has been fulfilled, resulting in the creation of a new resource
app.get('/201', (req, res) => {
	res.status(201).end('Suppose, user created successfully, statuscode 201')
})

// series 3xx
// 301 Multiple Choices
// Indicates multiple options for the resource from which the client may choose 
app.get('/301', (req, res) => {
    res.redirect("http://www.google.com") // redirect to google home page
})

// 302 Moved Permanently - should be used when target URL has changed permanently
app.get('/302', (req, res) => {
    res.status(302).redirect("/"); // redirect back to root directory
})

// series 4xx
// 400 Bad Request
app.get('/400', (req, res) => {
	res.status(400).end('send bad request')
})

// 401 Unauthorized
// Similar to 403 Forbidden, but specifically for use when authentication is required 
// and has failed or has not yet been provided
app.get('/401', (req, res) => {
	res.status(401).end('You are now Unauthorized')
})

// 402 Payment Required
app.get('/402', (req, res) => {
	res.status(402).end('Payment request successful')
})

// 403 Forbidden 
// The server understood the request, but it refuses to authorize it.  
// Authorization will not help and the request SHOULD NOT be repeated
app.get('/403', (req, res) => {
	res.status(403).end('403 Forbidden')
})

// 404 Not Found
// The requested resource could not be found. 
app.get('/404', (req, res) => {
	res.status(404).end('404 not found')
})

// series 5xx
// 500 Internal Server Error
app.get('/500', (req, res) => {
    res.status(500).end("Internal Server Error")
})

// 502 Bad Gateway
app.get('/502', (req, res) => {
    res.status(502).end("Bad Gateway")
})

// start server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})