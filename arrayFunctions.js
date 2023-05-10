/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  if(numbers.length%2 !== 0){
    return true;
  }
    return false;
}
let num1 = [1,2,3];
console.log(isArrayLengthOdd(num1));
 num1 = [1,2,3,4];
console.log(isArrayLengthOdd(num1));
/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  if(!isArrayLengthOdd(numbers)){
    return true;
  }
    return false;
  
}
let num2 = [1,2,3];
console.log(isArrayLengthEven(num2));
 num2 = [1,2,3,4];
console.log(isArrayLengthEven(num2));

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  let newArray = instructors;
  newArray.push("Laila");
  return newArray;
}
console.log(addLailaToArray(["Mshary", "Hasan"]));

const addLailaArra1 = (instructors) => {
  let newArray = instructors;
  newArray.push("Laila");
  return newArray;
};

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  let newArray = teams;
  return newArray.pop();
}
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here .slice(i,length)
  let newArray = fruits;
  //console.log(isArrayLengthEven(fruits));
  if(isArrayLengthEven(fruits)){
    newArray = newArray.slice(newArray.length/2,newArray.length);
    return newArray;
  }else{
    newArray = [];
    return newArray
  }nj 
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
// a string is an array of chars in this case
function youGottaCalmDown(shout) {
  // Your code here
  let newArray = shout;
  if(shout.includes("!")){
    newArray = newArray.slice(0, newArray.indexOf("!")+1);
  }
  return newArray;
}
console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));

// let array = [1,2,3];
// console.log(array.pop(0));
