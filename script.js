// const apiKey = 'http://api.weatherapi.com/v1/current.json?key=098e7d365540490a963185024232706&q=' + cityParameter + '&aqi=no'
// let cityParameter = 'austin'

// console.log(apiKey)

// const key = ""


const searchBtn = document.getElementById('searchBtn')
const cityTemp = document.getElementById('cityTemperature')
let degreeSymbol = '\u00B0'

async function searchCity() {

    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=098e7d365540490a963185024232706&q=Austin&aqi=no")
    const jsonData = await response.json()
    cityTemp.innerText = jsonData.current.temp_f + degreeSymbol;
}