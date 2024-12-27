// Q. Write a program to load a javascript file in a browser using promices. use then() to display an alert when load is complete.

// const loadScript = async (src)=>{
//     return new Promise((resolve, reject) => {

//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () =>{
//             resolve(src + "Done")
//         }
//         document.head.append(script)
//     })
// }
// let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// a.then((value)=>{
//     console.log(value);

// })

// Q write a previous program using async and await syntax
// const main2 = async () ={
//     console.log(new Date().getMilliseconds());
//     let a= await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
//     console.log(a);
//     console.log(new Date(). getMilliseconds());

// }
// main2()

// Q create a promise which rejects after 3 seconds use an async and await to get its value using a try catch to handle its error

// let a = () =>{
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Please this is not acceptable"))
//         },3000)
//     }) 
// } 
// let p = async () => {
//     try {
//         let c = await a()
//         console.log(c);

//     } catch (err) {
//         console.log(err);
//         console.log("error has beeen handled");

//     }
// }
// a()

// Q  write a program using promise.all() inside are async/await to await 3 promices compare its results with the case where we await these one by one

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

let p2 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
let p3 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}

const run = async()=>{
    console.time("run")
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.log(a1,a2,a3);
    console.timeEnd("run")
}
run()