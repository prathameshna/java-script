let a = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to server 1",
    "Connection fiales. Retrying...",
    "Connecting to server 2",
    "Connected successfully",
    "Username iamharry",
    "TryingBrute Force",
    "200K passwords tried...",
    "Match not found",
    "another 200K passwords tried...",
    "Accessing Account",
    "Hack successsfully"
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{resolve(true)},seconds * 1000)
    })
    
}
const showHack = async (message)=>{
    await sleep(2)
    console.log(message);
    
}
(async()=>{
    for(let i = 0; i<a.length; i++){
      await showHack(a[i])
    }
})()