/* 
 * Lee Knoyer
 * 6-14-19 
 * This program will make 7 calls to console.log to make a triangle out of the # character 
 */ 

 let number = "#";
 let counter = 0;

while (counter != 7) {
	console.log (number);
	number = number + "#";
	counter = counter + 1;
}


for (let number = "#"; number != "########"; number = number + "#") {
	console.log (number);
}