let key = prompt("enter the key you want to set")
let value = prompt("enter value you want to set")

localStorage.setItem(key,value)
console.log('the value is ${key} is ${localStorage.getItem(key)}');
if( key == "red" || key == "blue"){
    localStorage.removeItem(key)
}
if(key == 0){
    localStorage.clear(key)
}
// // create note saving app which stores your note to local storage.
let n = localStorage.getItem("note")
alert("your note is" + n)
let a = prompt("enter yout note")
localStorage.setItem("note",a)