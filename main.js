let url1 = "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f";
let url2 = "http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f";
let url3 = "http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f";


let city = document.querySelector(".city");
let cityWeather = document.querySelector(".weather-item");
let weatherClouds = document.querySelector(".weather-clouds");
let description = document.querySelector(".description");
let celsiusBtn = document.querySelector("#celsiusBtn");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let date = document.querySelector(".date");

let now = new Date().toLocaleDateString();
date.innerHTML = (now);
fetch(url1)

    .then(response => response.json())
    .then(function (response) {
        city.innerHTML = response.name;
        cityWeather.innerHTML = Math.round(response.main.temp - 273) + '&#176';
        weatherClouds.innerHTML = '<img src="http://openweathermap.org/img/wn/' + response.weather[0]['icon']+'@2x.png" alt="logo"/>';
        description.innerHTML = response.weather[0].description;
        wind.innerHTML = response.wind.speed;
        celsiusBtn.innerHTML = response.Math.round(response.main.temp - 273) + '&#176';
    })