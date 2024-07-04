let a = prompt("Hey, what's your age?");
a = Number.parseInt(a);

if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you can not even think of driving");
} else {
  alert("You can now drive as you are above 18");
}
console.log("Done");
