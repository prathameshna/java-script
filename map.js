let arr = [2, 44, 55, 32, 66, 34]
let a = arr.map((value, index, Array) => {
    console.log(value, index, Array);          //create a new array by performing some operation on each array element.
    return value + 1
})
console.log(a);



