let num = [1, 34, 35, 64]
let b = num.toString() // tostring() element are used to convert array into string.
console.log(b);


let c = num.join("_") // this is the join keyword for joining the array and add the any value betn two array.
console.log(c);

// let p = num.pop() // remove the last element from the array 
// console.log(p);

// let u = num.push(3) // add the new element at the end of array.
// console.log(u);

let s = num.shift() // remove the first element from the array 
console.log(s, num);

let un = num.unshift(5) // add the new element at the first of array.
console.log(un, num);