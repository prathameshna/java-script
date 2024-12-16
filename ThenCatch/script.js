let p1 = new Promise((resolve, reject)=>{
    console.log("promise is pending");
    setTimeout(()=>{
        console.log("i am promise i am fullfilled");
        resolve(true)
    },3000)
    
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("promise is pending");
        reject(new Error("I am a error"));
    },3000)
    
})
 p1.then((value)=>{
    console.log(value);
    
 })

 p2.catch((error)=>{
    console.log("some error are occured");
    
 })

