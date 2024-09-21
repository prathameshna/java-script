// main differnce between while loop and do while loop is 
//while loop excute first condition check and then run a block
//Do while first run a block and then check a condition.

//code:-
//while loop
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while(i < n){
    console.log(i)
    i++;
}
// Do while loop
let k = console.log("Enter value of n");

k = Number.parseInt(k)
let p = 0;
do {
    console.log(p);
    p++;
} while (p < k)
