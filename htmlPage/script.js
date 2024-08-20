
let age = prompt("what is your age :")
age = Number.parseInt(age)

const CanDrive = (age) => {
    return age > 18 ? true : false
}

if (CanDrive(age)) {
    alert("you can drive")

} else {
    alert("you can not drive")
}