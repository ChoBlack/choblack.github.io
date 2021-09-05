const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "94fedfe753c5d31e2068c52d7272a898";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = `City : ${data.name}`;
        weather.innerText = `Weather : ${data.weather[0].main} / Temperature :${data.main.temp}`;
    });
    console.log(lat,lon);
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
    
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

