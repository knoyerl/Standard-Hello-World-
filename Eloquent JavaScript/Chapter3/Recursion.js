/* Lee Knoyer 
 * 6-19-19
 * This program will determine if a number is even or odd and will convert the negative number to a positive.
 */

function isEven (x){
	x = Math.abs(x);
	if (x===0) {
		return console.log("This is an even number.")
	} else if (x===1){
		return console.log("This is an odd number.")
	} else {
		return isEven(x - 2);
	}
}

isEven(50);
isEven(75);
isEven(-1);