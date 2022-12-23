let url1 = "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f";

let apiKey = "b0b34e0501286ae903bab8dde901b6ae";
let cityName = document.querySelector(".city");
let cityWeather = document.querySelector(".weather-item");
let weatherClouds = document.querySelector(".weather-clouds");
let description = document.querySelector(".description");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#hume");
let date = document.querySelector(".date");
let input = document.querySelector(".input");
let date1 = document.querySelector(".date1");
let day = document.querySelector(".day");
let celsius = true;
let fahrenheitBtn;
let celsiusBtn;
let units = document.querySelector(".celsiusBtn");
let imgWeather1 = document.querySelector(".imgWeather1");

let firstWeekDay = document.querySelector(".firstWeekDay");
let secondWeekDay = document.querySelector(".secondWeekDay");
let thirdWeekDay = document.querySelector(".thirdWeekDay");
let forthWeekDay = document.querySelector(".forthWeekDay");

let firstWeather = document.querySelector(".firstWeather-clouds");
let secondWeather = document.querySelector(".secondWeather-clouds");
let thirdWeather = document.querySelector(".thirdWeather-clouds");
let forthWeather = document.querySelector(".forthWeather-clouds");

let firstDegree = document.querySelector(".firstDegree");
let secondDegree = document.querySelector(".secondDegree");
let thirdDegree = document.querySelector(".thirdDegree");
let forthDegree = document.querySelector(".forthDegree");





input.addEventListener("keyup", e => {
        if (e.key == "Enter" && input.value != ""){
                requestApi(input.value);
        }
});

// fetch(url1)
//     .then(response => response.json())
//     .then(function (response) {
//         cityName.innerHTML = response.name;
//         cityWeather.innerHTML = Math.round(response.main.temp - 273);
//         fahrenheitBtn.innerHTML = json.main.temp;
//         description.innerHTML = response.weather[0].description;
//         wind.innerHTML = response.wind.speed;
//         humidity.innerHTML = response.main.humidity;
//         weatherClouds.innerHTML = '<img src="http://openweathermap.org/img/wn/' + response.weather[0]['icon']+'@2x.png" alt="logo"/>';
//
//     });

function requestApi(city){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url)
    .then(response => response.json())
    .then(function (response) {
            cityName.innerHTML = response.name;
            cityWeather.innerHTML = Math.round(response.main.temp) + '&#176';
            weatherClouds.innerHTML = '<img src="http://openweathermap.org/img/wn/' + response.weather[0]['icon']+'@2x.png" alt="logo"/>';
            description.innerHTML = response.weather[0].description;
            wind.innerHTML = response.wind.speed;
        humidity.innerHTML = response.main.humidity;
    })
}

if (weatherClouds === "Clear"){
    imgWeather1.src = "img/sunny.png";
}
if (weatherClouds === "Clouds"){
    imgWeather1.src = "img/clouds.png";
}
if (weatherClouds === "Snow"){
    imgWeather1.src = "img/snow.png";
}
if (weatherClouds === "Rain"){
    imgWeather1.src = "img/rain.png";
}

fetch(url1)
    .then(response => response.json())
    .then(function (response) {
        cityName.innerHTML = response.name;
        cityWeather.innerHTML = Math.round(response.main.temp - 273) + "&#176";
        fahrenheitBtn.innerHTML = json.main.temp;
        description.innerHTML = response.weather[0].description;
        wind.innerHTML = response.wind.speed;
        humidity.innerHTML = response.main.humidity + "%";
        weatherClouds.innerHTML = '<img src ="http://openweathermap.org/img/wn/' + response.weather[0]['icon'] + '@2x.png" alt ="icon"/>';

    });




let now = new Date().toLocaleDateString();
date.innerHTML = (now);

let dayOfWeek = date.getUTCDay();
switch (dayOfWeek) {
    case 0:
        firstWeekDay.textContent = "Sunday";
        secondWeekDay.textContent = "Monday"
        thirdWeekDay.textContent = "Tuesday"
        forthWeekDay.textContent = "Wednesday"
        break;
    case 1:
        firstWeekDay.textContent = "Monday"
        secondWeekDay.textContent = "Tuesday"
        thirdWeekDay.textContent = "Wednesday"
        forthWeekDay.textContent = "Thursday"
        break;

    case 2:
        firstWeekDay.textContent = "Tuesday";
        secondWeekDay.textContent = "Wednesday"
        thirdWeekDay.textContent = "Thursday"
        forthWeekDay.textContent = "Friday"
        break;

    case 3:
        firstWeekDay.textContent = "Wednesday"
        secondWeekDay.textContent = "Thursday"
        thirdWeekDay.textContent = "Friday"
        forthWeekDay.textContent = "Saturday"
        break;

    case 4:
        firstWeekDay.textContent = "Thursday"
        secondWeekDay.textContent = "Friday"
        thirdWeekDay.textContent = "Saturday"
        forthWeekDay.textContent = "Sunday"
        break;

    case 5:
        firstWeekDay.textContent = "Friday"
        secondWeekDay.textContent = "Saturday"
        thirdWeekDay.textContent = "Sunday"
        forthWeekDay.textContent = "Monday"
        break;

    case 6:
        firstWeekDay.textContent = "Saturday";
        secondWeekDay.textContent = "Sunday"
        thirdWeekDay.textContent = "Monday"
        forthWeekDay.textContent = "Tuesday"
        break;

};