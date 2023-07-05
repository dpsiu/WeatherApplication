let city = "Austin"
let apiKey = "http://api.weatherapi.com/v1/current.json?key=098e7d365540490a963185024232706&q=" + city + "&aqi=no"

const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const cityTemp = document.getElementById('cityTemperature')
const cityState = document.getElementById('cityState')
const weatherStat = document.getElementById('weatherStatus')
const humidity = document.getElementById('humidity')
const visibility = document.getElementById('visibility')
const uv = document.getElementById('uv')
const windDir = document.getElementById('windDir')
const windMPH = document.getElementById('windMPH')
const precip = document.getElementById('precip')

let degreeSymbol = '\u00B0'

renderData()

async function renderData() {
    const response = await fetch(apiKey)
    const jsonData = await response.json()
    renderMiscData()
    console.log(searchInput.value)
}

async function renderMiscData() {
    const response = await fetch(apiKey)
    const jsonData = await response.json()
    if (response.status === 400) {
        alert('Location not found. Please try again. \nCheck: \n - Spelling \n - Syntax (City, City State)')
    } else {
        console.log('nice!')
    }

    if (jsonData.location.region == '') {
        cityState.innerText = jsonData.location.name + ', ' + jsonData.location.country
    } else {
        cityState.innerText = jsonData.location.name + ', ' + jsonData.location.region
    }

    cityTemp.innerText = jsonData.current.temp_f + degreeSymbol;
    weatherStat.innerText = jsonData.current.condition.text
    humidity.innerText = jsonData.current.humidity + '%'
    visibility.innerText = jsonData.current.vis_miles + ' mi'
    uv.innerText = jsonData.current.uv
    windDir.innerText = jsonData.current.wind_dir
    windMPH.innerText = jsonData.current.wind_mph + ' mph'
    precip.innerText = jsonData.current.precip_in + ' in'
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    city = searchInput.value
    apiKey = "http://api.weatherapi.com/v1/current.json?key=098e7d365540490a963185024232706&q=" + city + "&aqi=no"
    renderMiscData()
})


function checkInvalidInput() {
    fetch(apiKey)
    if (response.status === 400) {
        console.log('error')
    } else {
        console.log('nice!')
    }
}