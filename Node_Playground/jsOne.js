console.log ('Hello World');

//object and props 
let world = {
	size: {
		height: '250px',
		width: '250px'
	}, 
	color: 'blue',
	population: 10
};
console.log(world);

//object and props
let worldOne = new Object();
worldOne.size = {
	height: '400px',
	width: '400px'
}; 
worldOne.color = 'green'; 
worldOne.population = 20;

console.log(worldOne);

//creating a class
class World {
	constructor(size, color, population) {
		this.size = size;
		this.color = color;
		this.population = population;
	}

	isOrangeOrBlack(){
		return this.color === 'black' || this.color === 'orange';
	}
}

let worldTwo = new World({height: '500px', width: '500px'}, 'orange', 500);
console.log (worldTwo);

let worldThree = new World({height: '700px', width: '700px'}, 'orange', 700);
console.log (worldThree);

//array
let solarSystem = [
	new World({height: '500px', width: '500px'}, 'orange', 500),
	new World({height: '600px', width: '600px'}, 'blue', 600),
	new World({height: '700px', width: '700px'}, 'green', 700),
	new World({height: '800px', width: '800px'}, 'red', 800),
	new World({height: '900px', width: '900px'}, 'black', 900)
]
console.log(solarSystem);

//filter for world that are orange or black 

let worldArray = [];

for (var i = 0; i < solarSystem.length; i++){
	let w = solarSystem[i];
	if (w.color === 'black' || w.color === 'orange'){
		worldArray.push(w);
	}
}
console.log(worldArray);

	//point to the specific worlds in our arry 
	//test for color type of the world 
	//if color orange or black save if not ignore 
	//state results of orange and black worlds 

//added function to help filter 
let worldArrayTwo = [];

for (var i = 0; i < solarSystem.length; i++){
	let w = solarSystem[i];
	if (w.isOrangeOrBlack()){
		worldArrayTwo.push(w);
	}
}
console.log(worldArrayTwo);

//use array.filter function
let worldArrayThree = solarSystem.filter(function(w){return w.isOrangeOrBlack();});

console.log(worldArrayThree);

let worldArrayFour = solarSystem.filter((w) => w.isOrangeOrBlack());
console.log(worldArrayFour);

//creating filter 
Array.prototype.filter = function(shouldIKeep){
	console.log('using my implementation of filter')
	let worldArrayTwo = [];

	for (var i = 0; i < this.length; i++){
		let w = this[i];
		if (shouldIKeep(w)){
			worldArrayTwo.push(w);
		}
	}
	return worldArrayTwo;
}

let worldArrayFive = solarSystem.filter((w) => w.isOrangeOrBlack());
console.log(worldArrayFive);