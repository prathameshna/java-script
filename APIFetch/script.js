const button = document.getElementById("search-btn")
const input = document.getElementById("city-input")

const temp = document.getElementById("temperature")
const win = document.getElementById("wind")
const descrip = document.getElementById("description")

async function getData(cityName){
    const promise = await fetch(
        'https://goweather.herokuapp.com/weather/${cityName}'
    );
    return await promise.json();
}

button.addEventListener("click", async()=>{
    const value = input.value;
    const result = await getData(value);
    temp.innerText = ${result.forecast.day};
    
});