function add(a,b) {
	return a+b;
	
}

function subtract(a,b) {
	return a-b;
}

function sum(array) {
	return array.reduce(function(a,b){
		return a + b
	  }, 0);
}

function multiply (array) {
	return array.reduce(function(a,b){
		return a * b
	  });
}

function power(a,b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let fact = 1;
	for(a; a>0;a--){
		fact*=a;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}