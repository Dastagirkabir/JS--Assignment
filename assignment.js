//A Javascript Program to convert Feet to Mile. 
function feetToMile(mile)
{
  var feet = mile* 0.000189394;
  return feet; 
}

var conversionResult = feetToMile(25);

if(conversionResult <= 0){
  console.log('Length Can`t be negative. Please try again with a positive value;');
}
else{
  console.log('Result is =', conversionResult, 'mile');
}

// A Javascript Program to Calculate the amount of wood per feet. 
function woodCalculator(chair, table, bed)
{
  var perChair = chair*1;
  var perTable = table*3;
  var perBed = bed*5;
  var totalFurniture = perChair + perTable + perBed; 
  return totalFurniture;
}

var cubicFeetCalculation = woodCalculator(5, 6, 7);

console.log('Total cost of wood is', cubicFeetCalculation, 'cubic feet');

//A Javascript Program to calculate the amount og brick to build a building.

function brickCalculator(floor){
  var brick = 0;
  if(floor <= 10){
    brick = floor * 15000;
  }
  else if(floor <=20){
    var firstFloors = 10 * 15000;
    var remaining = floor - 10;
    var secondFloors = floor * 12000;
    brick = firstFloors + secondFloors;
  }
  else{
    var firstFloors = 10 * 15000;
    var secondFloors = 10 * 12000;
    var remaining = floor - 20;
    var thirdFloors = remaining * 10000;
    brick = firstFloors + secondFloors + thirdFloors;
  }
  return brick;
}

var brickCount = brickCalculator(25);
console.log(brickCount)

//A Javascript Program to find the shortest name of my friends. 

var firendsName = ['abul', 'kashem', 'roton', 'mou']; 

function tinyFriend(name){
  var smallLength = Infinity;
  var smallestName;
  for(var i = 0 ; i <name.length; i++){
    if(name[i].length < smallLength){
      smallLength = name[i].length;
      smallestName = name[i];
    }
  }
  return smallestName; 
}
var names = tinyFriend(firendsName);
console.log(names);

