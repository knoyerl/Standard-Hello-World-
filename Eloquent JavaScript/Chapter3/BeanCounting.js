
function countCaps (x){
	if (typeof x == "string"){
		let count = 0;
		for (let i = 0; i < x.length; i++) {
			console.log (x [i]);
			let code = x.charCodeAt(i);
			if (code > 64 && code < 91){
				count++;
			}
			
		} 
		return count;
	} else {
		console.log("Please enter a valid string."); 
		return -1;
	}
} 

console.log(countCaps("Test"));
console.log(countCaps("TBDKE"));

function countBs (x){
	// if (typeof x == "string"){
	// 	let count = 0;
	// 	for (let i = 0; i < x.length; i++) {
	//  		console.log (x [i]);
	//  		if (x [i] == "B"){
	//  			count++;
	//  		}	
	//  	} 
	//  	return count;
	//  } else {
	//  	console.log("Please enter a valid string."); 
	//  	return -1;
	// }
	return count(x, "B");
} 

console.log(countBs("Test Sring BB"));

function count (haystack, needle){
	if (typeof haystack == "string"){
		let cnt = 0;
		for (let i = 0; i < haystack.length; i++) {
			console.log (haystack [i]);
			if (haystack [i] == needle){
				cnt++;
			}
		}
		return cnt;
	} else {
		console.log("Please enter a valid string.");
		return -1;
	}
}

console.log(count("This is a test.", "e"));
console.log(countBs(13));