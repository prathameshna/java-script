async function harry() {
    let dehliWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000)
    })
    let bangloreWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 2000)
    })
    console.log("fetching dehli whether please wait!...");
    let delhiW = await dehliWhether
    console.log("fetched successfully." + delhiW);
    console.log("fetching banglore whether please wait!...");
    let bangW = await bangloreWhether
    console.log("fetched successfully." + bangW);
    return [delhiW, bangW]
}
console.log("welcome to whether control room");
let a = harry()
a.then((value)=>{
    console.log(value);
    
})

