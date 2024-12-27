function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"

// 1. Write a JavaScript function to print the “Hello World” message.
function sgg(){
    console.log("hello world")
}
sgg()

//2. Write a function that returns the square of a number
function srq(num){
    return num*num; 
}
console.log(srq(5));

// 3. Write a function to convert Celsius to Fahrenheit
function calFahrenheit(cel) {
    return (cel*9/5)+32; //Conversion formula
  }
  
  console.log(calFahrenheit(0)) //32
  console.log(calFahrenheit(20)) //68
  console.log(calFahrenheit(40)) //104

//4. Write a function to find the area of a given Rectangle.
function rect(length,width){
    return rectangle = length * width
}
console.log(rect(2,3));

// 5.Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld() {
  return function() {
      return "Hello World";
  };
}

// Example usage
const hello = createHelloWorld();
console.log(hello()); // Output: "Hello World"

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions. 

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
function expect(val) {
  return {
    toBe: function(expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function(expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
}

// Example usage:
try {
  expect(5).toBe(5); // Returns true
  expect(5).notToBe(10); // Returns true
  expect(5).toBe(10); // Throws "Not Equal"
} catch (error) {
  console.error(error.message);
}

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it. in javascript
