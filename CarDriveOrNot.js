let runagain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false
}
while (runagain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>0){
        console.error("Please enter a valid age")
        break;
    }
    if (canDrive(age)) {
        alert("yes you can drive")
    }
    else {
        alert("You can not drive")
    }
    runagain = confirm("Do you want to play again ?")
}