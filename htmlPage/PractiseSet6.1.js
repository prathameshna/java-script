// Write a program using prompt function to take input of age as a value from the user and use alert  to tell him if he can drive?

age = prompt("What is your age")
age = Number.parseInt(age)

const CanDrive = (age) => {
    return age > 18 ? true : false
}

if (CanDrive(age)) {
    alert("Ypu can drive")
}
else {
    alert("you can not drive")
}

