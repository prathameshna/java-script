// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let age = prompt("what is your age")

if (age <= 12){
  console.log("ticket pay 5");
}
else if(age <= 18){
  console.log("ticket price 10");
  
}
else if(age <= 60){
  console.log("ticket price 20");
  
}
else if(age >= 60){
  console.log("ticket price 10");
  
}

// Write a program that determines if a year is a leap year.

let year = prompt("Enter a year")
if(0 == year % 4){
    console.log("THIS IS A LEAP YEAR");
    
}
else{
    console.log("THIS IS NOT LEAP YEAR");
    
}