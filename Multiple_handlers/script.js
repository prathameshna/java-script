let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("i am not resolve")
        resolve(1)
    },2000);
})

p1.then(()=>{
    console.log("now resolve");
    
})

p1.then(()=>{
    console.log("hurrey");
    
})