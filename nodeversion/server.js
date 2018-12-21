


const mysql = require('mysql');
const mysql_creds = require('./mysql_creds.js');
const db = mysql.createConnection( mysql_creds );

const express = require('express');
const webserver = express();
//when accessing any files, like index.html, main.js, favicon.ico, 
//look in the html folder and send them to the client automatically
webserver.use( express.static( __dirname + '/html' ));
webserver.use(express.urlencoded({ extended: false }));

function generateID(length = 10){
	const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	let code = '';
	while(code.length<length){
		let randomIndex = Math.floor(letters.length * Math.random());
		let this_letter = letters[randomIndex];
		code += this_letter;
	}
	return code;
}

function generateRandomNumber(min=0, max=10, whole=true){
	let number = Math.random() * (max-min+1) + min;
	if(whole){
		return Math.floor(number);
	}
	return number;
}

webserver.get('/generateNumber', (request, response)=>{
	const min = request.query.min;
	const max = request.query.max;
	const uniqueID = generateID();
	const randomNumber = generateRandomNumber(min, max);
	db.connect( ()=>{
		const query = "INSERT INTO `currentNumber` SET `number`="+randomNumber+", `numberCode`='"+uniqueID+"' ";	
		db.query( query, (error)=> {
			if(!error){
				const output = {
					success: true,
					code: uniqueID
				}
				response.send( output );
			} else {
				response.send( {success: false, error })
			}
		})
	})
}) 

webserver.post('/getNumber', (request, response) => {
	let code = request.body.exchangeCode;
	if(!code){
		response.send( {
			success: false,
			error: 'missing exhcange code'
		})
		return;
	}
	code = code.replace(/["']/g, '\\"');
	db.connect( ()=>{
		const query = "SELECT * FROM currentNumber WHERE numberCode='"+code+"'"
		db.query(query, (error, data)=>{
			if(!error){
				if(data.length>0){
					response.send( {
						success: true,
						number: data[0].number
					})
				} else {
					response.send( {
						success: false,
						error: 'invalid code'
					})
				} 
			} else {
				response.send( {
					success: false,
					error: 'error in db: '+error
				})
			}
		})
	})
})

webserver.listen( 3500, ()=>{
	console.log('server is running on port 3500');
});












