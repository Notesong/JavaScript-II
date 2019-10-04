// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
let getLengthTest = getLength(items, length => `There are ${length} items in the array.`);
console.log(getLengthTest);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
let lastTest = last(items, lastItem => `The last item in the array is ${lastItem}.`);
console.log(lastTest);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
let sumNumsTest = sumNums(2,5, sum => `The sum of 2 and 5 is ${sum}.`);
console.log(sumNumsTest);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
let multiplyNumsTest = multiplyNums(3,4, product => `The product of 3 and 4 is ${product}.`);
console.log(multiplyNumsTest);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list. Pass true to the callback if it is, otherwise pass false.
  
  // Attempt to populate testList array.  If no match, the array will remain empty and return false with the callback.
  const testList = list.filter((filterItem) => filterItem === item);
  // This page helped with the below check: https://stackoverflow.com/questions/11743392/check-if-an-array-is-empty-or-exists
  return Array.isArray(testList) && testList.length ? cb(true) : cb(false);
}
// Return string to console.log() telling whether or not the item is in the items array.
function feedback(item) {
  return contains(item, items, trueOrFalse => `${item} is in items array? ${trueOrFalse}`);
}
console.log(feedback("Pencil"));
console.log(feedback("Bird"));


/* STRETCH PROBLEM */

const duplicateItemsArray = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Notebook'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  // Used from() and set to create clean array. These pages helped with creating an array without duplicates:
  // https://codehandbook.org/es6-javascript-remove-duplicates-from-an-array/
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  return cb(Array.from(new Set(array)));
}
const cleanArray = removeDuplicates(duplicateItemsArray, item => item)
console.log(duplicateItemsArray);
console.log(cleanArray);