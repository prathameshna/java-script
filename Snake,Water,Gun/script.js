let user = prompt("ENTER S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["s", "W", "G"][cpuI]

let match = (cpu, user)=>{
    if(cpu === user){
        return "Nobody"
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> USER:${user} <br> the winner is: ${result.toUpperCase()}`)