'use strict'

const weatherDOM = document.querySelector('[data-weather]');
const date = new Date();
  
function displayWeather() {
    fetch(`https://www.metaweather.com/api/location/868274/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            
            weatherDOM.innerHTML = `
            <p>Temperature Now: <span class="h6">${data[0].the_temp} °C</span></p>
            <p>Sky: <span class="h6">${data[0].weather_state_name}</span></p>
            <p>Today's max temperature: <span class="h6">${data[0].max_temp} °C</span></p>
            <p>Today's min temperature: <span class="h6">${data[0].min_temp} °C</span></p>
            <p>Air pressure: <span class="h6">${data[0].air_pressure} mbar</span></p>
            <p>Humidity: <span class="h6">${data[0].humidity}%</span></p>
            <p>Wind: <span class="h6">${data[0].wind_direction_compass} - ${parseInt(data[0].wind_speed)} km/h</span></p>
            `
        })
}

displayWeather()