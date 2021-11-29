// Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.
for(var i = 0; i < 10; i++){console.log(i)}

// Write a for loop that prints to the console 9 through 0.
for(var i = 9; i >=0; i--){console.log(i)}

// Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){console.log(fruit[i])}

// Bronze Medal

// Write a for loop that will push the numbers 0 through 9 to an array.
var myArray = []
for(var i = 0; i <10; i++){myArray.push(i)}
console.log(myArray)

// Write a for loop that prints to the console only even numbers 0 through 100.
for(var i = 0; i < 101; i++){if(i % 2 === 0){console.log(i)}}

// Write a for loop that will push every other fruit to an array.
const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruitArray = []
for(var i = 0; i < fruit2.length; i++){if(i % 2 === 0){fruitArray.push(fruit2[i])}}
console.log(fruitArray)

// Silver Medal

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// Write a loop that will print out all the names of the people of the people array
for(var i = 0; i <peopleArray.length; i++){console.log(peopleArray[i].name)}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var namesArray = []
var occupationsArray = []
for(var i = 0; i <peopleArray.length; i++){namesArray.push(peopleArray[i].name), occupationsArray.push(peopleArray[i].occupation)}
console.log(namesArray)
console.log(occupationsArray)

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer". Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.
var skipNames = []
var skipOccupations = []
for(var i = 0; i <peopleArray.length; i++){
  if(i % 2 === 0){
    skipNames.push(peopleArray[i].name)}
  else{skipOccupations.push(peopleArray[i].occupation)}
}
console.log(skipNames)
console.log(skipOccupations)

// Gold Medal - Nesting

// Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

var grid1 = [{
  subgrid: [],
  },{
  subgrid: [],
  },{
  subgrid: []
  }]
for(var i = 0; i < grid1.length; i++){
  for(var j = 0; j < 3; j++){grid1[i].subgrid.push(0)}
}
for(var i = 0; i < grid1.length; i++){console.log(grid1[i].subgrid)}


// // Create an array that mimics a grid like the following using nested for loops:

// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

var grid2 = [{
  subgrid: [],
  },{
  subgrid: [],
  },{
  subgrid: []
  }]
for(var i = 0; i < grid2.length; i++){
  for(var j = 0; j < 3; j++){grid2[i].subgrid.push(i)}
}
for(var i = 0; i < grid2.length; i++){console.log(grid2[i].subgrid)}

// // Create an array that mimics a grid like the following using nested for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

var grid3 = [{
  subgrid: [],
  },{
  subgrid: [],
  },{
  subgrid: []
  }]
for(var i = 0; i < grid3.length; i++){
  for(var j = 0; j < 3; j++){grid3[i].subgrid.push(j)}
}
for(var i = 0; i < grid3.length; i++){console.log(grid3[i].subgrid)}

// // Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [["x", ...], 
//             ["x", ...], 
//             ["x",...], ...] 

var grid4 = [{
  subgrid: [1,2,3]
},{
  subgrid: [4,5,6]
},{
  subgrid: [7,8,9]
}
]

for(var i = 0; i < grid4.length; i++){console.log(grid4[i].subgrid)}

for(var i = 0; i < grid4.length; i++){
  for(var j = 0; j < grid4[i].subgrid.length; j++){grid4[i].subgrid[j] = "x"}
}
for(var i = 0; i < grid4.length; i++){console.log(grid4[i].subgrid)}

