// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function callMe() {
  return () => console.log(`Hey you~`);
}
const youCalled = callMe();
youCalled();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = (limit) => {
  let count = 0;
  return function counter() {
    ++count;
    if (count > limit) {
      count = 1;
    }
    return count;
  };
};
// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker` will refuse to go over the limit, and start back at 1.
let counted = counterMaker(3);
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
