// Synchronus
let a =prompt("what is your age")
let b = prompt("what is your favourate colour")
let c =prompt( "what is your age")
console.log(`My name is ${a}, my favorite color is ${b}, and my age is ${c}.`);

// Asynchronus
console.log("start excution");
setInterval(function(){
    alert("function execute")
},3000)
console.log("start excution");
