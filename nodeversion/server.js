

const express = require('express');
const webserver = express();
//when accessing any files, like index.html, main.js, favicon.ico, 
//look in the html folder and send them to the client automatically
webserver.use( express.static( __dirname + '/html' ));

webserver.get('/generateNumber', (request, response)=>{
	console.log('generateNumber called');
	response.send('test');
}) 

webserver.listen( 3500, ()=>{
	console.log('server is running on port 3500');
});