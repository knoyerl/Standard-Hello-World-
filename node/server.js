const express = require('express')
const app = express()
const port = 3000
const qs = require("querystring");
const url = require("url");

const result = {
	food: "burger",
	toppings: ["pepperoni", "sausage", "green pepper"],
	size: "xl"
};

app.get('/', (req, res) => {


	console.log(req.url);
	let myUrl = url.parse(req.url, true);
	let triangleSize = myUrl.query.triangleSize;
	console.log(triangleSize);
	let triangle = "";

	//const triangleSize = 10;
	for(let i=0; i < triangleSize; i++) {
		//let line = "";
		//console.log("".padStart(triangleSize - i, " ") + "".padStart((i*2+1), "*"));
		triangle += "".padStart(triangleSize - i, " ") + "".padStart((i*2+1), "*") + "\n";
		// for(let j=0; j < (triangleSize - i); j++) {
		// 	line += " ";
		// }
		// for(let j=0 - i; j <= i; j++) {
		// 	line += "*";
		// }
		// console.log(line);
	}

	res.end(triangle);
});	

app.listen(port, () => console.log(`Example app listening on port ${port}!`))