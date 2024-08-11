let n = [2, 3, 5, 4, 7, 8]   
console.log(n.length)
delete n[0]              // If you delete any element from the array, but the size of the element remains unchanged.
console.log(n.length)

let num = [22, 34, 54, 4, 7, 86] 
let num1 = [22, 34, 54, 4, 7, 86]          // this use for comnbine two array with each other.
let num2 = num.concat(num1)            
console.log(num2);

let srt = [22, 34, 54, 4, 7, 86] 
srt.sort()                         //  this SORT method are sort alphabeticle not a ascending or disending order.
console.log(srt)


let compare = (a,b)=>{
    return a - b             // To achieve the proper ascending or descending order, we need to do this.
}
let srt1 = [22, 34, 54, 4, 7, 86] `
srt1.sort(compare)
console.log(srt1);

//splice element

let spls = [22, 34, 54, 4, 7, 86] 
spls.splice(2, 3, 55, 66)          //splice element are use to add and remove element from array.
console.log(spls);

let sls = [22, 34, 54, 4, 7, 86] 
let newArry = sls.slice(3)
console.log(newArry);


