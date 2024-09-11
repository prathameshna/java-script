// #1 — Print the numbers from 0 to 15.

for (let i = 0; i <= 15; i++) {
    console.log("Value of i is: " + i);

}
// Print the numbers from 12 to 24.
for (let a = 12; a <= 24; a++) {
    console.log("value a is: " + a);

}
// Print the ODD numbers from 7 to 31.
for (let b = 7; b <= 31; b++) {
    if (b % 2 != 0) {
        console.log(b);

    }
}

// #4 — Print the EVEN numbers from 10 to -20.
for (let c = 10; c >= -20; c--) {
    if (c % 2 == 0) {
        console.log("even number is :", c);

    }
}

/* #5 — Iterate through all numbers from 1 to 45. Print the following:

For multiples of 3 print “Fizz”
For multiples of 5 print “Buzz”
For multiples of 3 and 5 print “FizzBuzz” */

for (let d = 1; d <= 45; d++) {
    if (d % 3 == 0) {
        console.log("for a fizz",d);

    }else if(d % 5== 0){
        console.log("for a Buzz",d);
        
    }else if(d % 3 == 0 && d % 5== 0){
        console.log("FizzBuzz",d);
        
    }
}

/* #6 — Print all the elements of the following array

var thisIsAnArray = ["element1", "element2", "element3", "element4"]; */

var thisIsAnArray = ["element1", "element2", "element3", "element4"];
for (var i = 0; i < thisIsAnArray.length; i++) {
  console.log(thisIsAnArray[i]);
}

/* #7 — Calculate the sum of all the numbers in the following array

var numbersArray = [1,13,22,123,49]  */

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;
for (var i = 0; i < numbersArray.length; i++) {
  sum = sum + numbersArray[i];
}
console.log("The sum is: " + sum);