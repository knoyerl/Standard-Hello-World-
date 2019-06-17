/*
 * Lee Knoyer 
 * 6-15-19 
 * This program will make a chessboard using the console.log function 
 */

 let size = 20;
 let count = 0;

while (count != size/2){
	count = count + 1;
	console.log(" #".repeat(size));
	console.log("# ".repeat(size));
}

