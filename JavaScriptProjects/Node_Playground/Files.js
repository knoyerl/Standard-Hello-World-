const fs = require('fs');
const request = require('request');
fs.writeFileSync('Sally.txt', 'Sally Sells Sea Shells.');


/*request('http://www.google.com', function(error, response, html) {
	console.error('error:', error);
	console.log('statusCose:', response && response.statusCode);
	console.log('html', html);
	fs.writeFileSync('Google.html', html);
}); */

request('http://192.168.86.26:3000', function(error, response, data){
	console.log('statusCode:', response && response.statusCode);
	console.log('data', data);
	console.log(JSON.parse(data).food);
	let food = JSON.parse(data).food;
	console.log('A ' + food + ' was ordered.');
	let order = JSON.parse(data);
	console.log(orderTemplate(order));
});

function orderTemplate(order){
	return `A ${order.food} was ordered. The customer wants the following toppings ${order.toppings.join(', ')}.
	`
}

request('http://192.168.86.26:3000', function(error, response, triangle){
	console.log('error:' error);
	console.log('statusCode:', response && response.statusCode);
	console.log('triangle', triangle);
	console.log(JSON.parse(triangle).triangleSize);
});