const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => {
	// Send back a simple response
	res.send('This is home page');
})

app.get('/about', (req, res) => {
	// Send back a simple response
	res.send('This is home page');
})

app.get('/contact', (req, res) => {
	// Send back a simple response
	res.send('This is home page');
})

// use post method
app.post('/createuser',(req,res)=>{
    // get data from client side
	res.send('user is created');
})

// use post method
app.put('/updateuser',(req,res)=>{
    // get data from client side
	res.send('user is updated');
})

// use post method
app.patch('/update_specific_user',(req,res)=>{
	// get data from client side and update specific data fields of user
	res.send('user is updated specific data fields');
})

// use delete method
app.delete('/deleteuser', (req, res) => {
	res.send('user is deleted');
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})