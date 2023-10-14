const apiKey = 'd44063330bac39082c4f20ec79a3c771';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon =document.querySelector('.weather-icon');
const weatherInfo = document.querySelector('.weather');
const errorInfo = document.querySelector('.error');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        errorInfo.style.display = 'block';
        weatherInfo.style.display = 'none';
    } else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humditiy').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';
        weatherIcon.src = `./imgs/icons/${data.weather[0].main.toLowerCase()}.png` // Change weather icon on city current status
        weatherInfo.style.display = 'block'
        errorInfo.style.display = 'none'
    }

}

searchBtn.addEventListener('click', ()=> checkWeather(searchBox.value))