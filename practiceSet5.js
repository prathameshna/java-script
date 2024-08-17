// problem no 1

// create an array of numbers and take input from the users to add numbers to the array ?
let arr = [4, 5, 23, 5, 34, 23, 5];
let a = prompt("Enter your number");
a = Number.parseInt(a);
arr.push(a);
console.log(a);
console.log(arr);

// problem no 2

//Keep adding a number to the array 1 to until 0 is added in the array?

let arr2 = [4, 5, 23, 5, 34, 23, 5];
let a2;
do{
    a2 = prompt("Enter your number")
    a2.Number.parseInt(a2)
    a2.push(a2)
    console.log(arr2)
}while(a != 0);
console.log(arr2);

// problem no 3

// Create a array and when and push numbers in the array but when add zero array will be stop.
let arr3 = [23, 44, 55, 32, 67, 34]
let a1;

do{
     a1 = prompt("Enter any number")
     a1 = Number.parseInt(a)
     arr3.push(a)
}while(a != 0);
console.log(arr3);

// problem no 4

// Filters for a numbers divisible by 10 from a array.

// Filters for a numbers divisible by 10 from a array.

let arr4 = [12, 14, 54, 67, 35, 754, 24, 100]
let a3 = arr4.filter((vv) => {
  return (vv % 10 == 0)
})
console.log(a3);

// problem no 5

// Create an array of square of  given numbers.

let a5 = [12, 14, 54, 67, 35, 754, 24, 100]
let a4 = a5.map