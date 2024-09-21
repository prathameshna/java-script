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
