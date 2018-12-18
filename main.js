
$(document).ready( startApp );

var randomNumber = null;

function startApp(){
	applyClickHandlers();
	getRandomNumber()
}

function applyClickHandlers(){
	$("#guessButton").click( makeGuess );
}

function getRandomNumber(){
	return $.ajax({
		url: 'generateNumber.php',
		dataType: 'json',
		data: {
			min: 50,
			max: 100
		}
	}).then( function( response ){
		if(response.success){
			randomNumber = response.number;
		}
	})
}

function displayMessage(message){
	$("#display").text(message);
}

function makeGuess(){
	var userGuess = parseInt($("#userGuess").val());
	if(randomNumber < userGuess){
		displayMessage('too high')
	} else if(randomNumber > userGuess){
		displayMessage('too low');
	} else {
		displayMessage(' got it');
	}
	$("#userGuess").val('');
}


