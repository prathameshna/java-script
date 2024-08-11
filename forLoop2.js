let num = [3, 4, 2, 6, 5, 3]
for(let i = 0; i<num.length; i++){
    console.log(i);
    
}

// for each loop 

num.forEach((element) => {
   console.log(element*element);
   
})

// Array.from
let ame = "Easy"
let Arr = Array.from(ame)
console.log(Arr);

// for...of
for (let i of num){
    console.log(i);
} 

