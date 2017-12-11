var prompt = require('prompt');

var invalidPasswordMessage = 'Please enter a trojens.dsu.edu email address.'
var invalidEmailMessage = 'Please enter a password between 8 - 14 charictors that contains at least one number and a special character.'


function isValidEmail (email) {
	if (email.indexOf("@trojens.dsu.edu")!= -1) {
		return true;
	}
	else {
		return false;
	}
};

function isValidPassword(password) {
	var fail = 0;
	
	for(var i = 33; i < 48; i++){
		
		if (password.indexOf(String.fromCharCode(i)) == -1) {
		fail++;
		}
	}
	
	if(fail == 16 || password.size < 8 || password.size > 14)
	{
		return false;
	}
	
	else {
		return true;
	}
};

function main(){

  prompt.start();

  prompt.get(['email', 'password'], function (err, result) {
	
	if(isValidEmail(result.email)) {
		console.log('  email: PASS');
	}
	else {
		console.log('  email: FAIL');
	}
	
	if(isValidPassword(result.password)){
		console.log('  password: PASS');
	}
	else {
		console.log('  password: FAIL');
	}
	
  });
}

main();





