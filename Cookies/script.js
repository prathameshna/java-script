console.log(document.cookie);
document.cookie="name=prathamesh3463"
console.log(document.cookie);

// encodeURIComponent use
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = '${encodeURIComponent(key)} = ${encodeURIComponent(key)}'
console.log(document.cookie);

