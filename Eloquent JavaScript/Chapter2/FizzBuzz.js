/*
 * Lee Knoyer
 * 6-14-19
 * This program will use the console.log function to print all the numbers from 1 to 100 with two exceptions.
 * for numbers divisible by 3 it will print Fizz and for numbers divisible by 5 it will print Buzz, numbers 
 * divisible by both 3 and 5 will print FizzBuzz. 
 */


let number = 0;

while (number != 100) {
	number = number + 1;
	if (number % 3 == 0 && number % 5 == 0){
		console.log("FizzBuzz");
	} else if (number % 5 == 0){
		console.log("Buzz");
	} else if (number % 3 == 0) {
		console.log("Fizz");
	} else {
		console.log(number);
	}
}

while (number > 0 && number < 100) {
	number = number + 1;
	if (number % 3 == 0 && number % 5 == 0){
		console.log("FizzBuzz");
	} else if (number % 5 == 0){
		console.log("Buzz");
	} else if (number % 3 == 0) {
		console.log("Fizz");
	} else {
		console.log(number);
	}
}