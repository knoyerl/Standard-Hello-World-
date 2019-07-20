function range (start, end){
	if (typeof start != "number") {
		throw "Start of range must be numerical.";
		}
	if (typeof end != "number") {
		throw "End of range must be numerical."
	}
	start = Math.floor(start);
	end = Math.floor(end);
	if (end < start) {
		throw "End should be greater than start."
	}
	let arrRange = [];
	while (start <= end){
		arrRange.push(start++);
	}
	return arrRange;
}

console.log(range(1, 5));

function sum (x){

}

console.log(sum(range(1,5)));