
let apiKey = "343d33d71141f1623d91c8c8aab91982";
let lat = 50.4333;
let lon = 30.5167;
let cityName = document.querySelector(".city");
let cityWeather = document.querySelector(".weather-item");
let weatherClouds = document.querySelector(".weather-clouds");
let description = document.querySelector(".description");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#hume");
let date = document.querySelector(".date");
let input = document.querySelector(".input");
let buttonSearch = document.querySelector(".buttonSearch");
let weatherIcon = document.querySelector(".weatherIcon")
let meteorSituation;

let imgWeather1 = document.querySelector(".imgWeather1");
let city = "Kyiv";
let feelsLike = document.querySelector(".feelsLike");

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

let dates = new Date();
let nextWeekNames = dates.getUTCDay();

switch (nextWeekNames) {
    case 0:
        firstWeekDay.textContent = "Monday"
        secondWeekDay.textContent = "Tuesday"
        thirdWeekDay.textContent = "Wednesday"
        forthWeekDay.textContent = "Thursday"
        break;
    case 1:
        firstWeekDay.textContent = "Tuesday"
        secondWeekDay.textContent = "Wednesday"
        thirdWeekDay.textContent = "Thursday"
        forthWeekDay.textContent = "Friday"
        break;

    case 2:
        firstWeekDay.textContent = "Wednesday"
        secondWeekDay.textContent = "Thursday"
        thirdWeekDay.textContent = "Friday"
        forthWeekDay.textContent = "Saturday"
        break;

    case 3:
        firstWeekDay.textContent = "Thursday"
        secondWeekDay.textContent = "Friday"
        thirdWeekDay.textContent = "Saturday"
        forthWeekDay.textContent = "Sunday"
        break;

    case 4:
        firstWeekDay.textContent = "Friday"
        secondWeekDay.textContent = "Saturday"
        thirdWeekDay.textContent = "Sunday"
        forthWeekDay.textContent = "MMonday"
        break;

    case 5:
        firstWeekDay.textContent = "SSaturday"
        secondWeekDay.textContent = "SSunday"
        thirdWeekDay.textContent = "Monday"
        forthWeekDay.textContent = "Tuesday"
        break;

    case 6:
        firstWeekDay.textContent = "Sunday"
        secondWeekDay.textContent = "Monday"
        thirdWeekDay.textContent = "Tuesday"
        forthWeekDay.textContent = "Wednesday"
        break;

};
let now = new Date().toLocaleDateString();
date.innerHTML = (now);

document.querySelector("input").addEventListener("keypress", showNewCity);

function showNewCity(e) {
    if (e.key === 'Enter') {
        city = input.value;
        showWeather(city)
    }
}
buttonSearch.addEventListener("click", function(){
    city = input.value;
    showWeather(city)
})

function showWeather(e) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + `${city}` + "&appid=75e8a972695b454279faf26b7898bfe6";
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            lat = json.coord.lat;
            lon = json.coord.lon;
            weatherClouds.innerHTML = '<img src ="http://openweathermap.org/img/wn/' + json.weather[0]['icon'] + '@2x.png" alt ="icon"/>';
            cityName.innerHTML = json.name;
            cityWeather.innerHTML = Math.round(json.main.temp - 272) + '&degC';
            feelsLike.innerHTML = 'Feels likes ' + Math.round(json.main.feels_like - 272) + '&degC';
            description.innerHTML = json.weather[0].description;
            wind.innerHTML = 'Wind:' + json.wind.speed + ' m/s';
            humidity.innerHTML = json.main.humidity + ' %';
            meteorSituation = json.weather[0].main;
            if (meteorSituation === 'Rain') {
                weatherIcon.src = `img/rainyIcon.jpeg`;
            }
            if (meteorSituation === 'Clear') {
                weatherIcon.src = `img/sunIcon.webp`;
                document.body.classList.add(".clear");
            }
            if (meteorSituation === 'Snow') {
                weatherIcon.src = `img/snowIcon.jpeg`;
            }
            if (meteorSituation === 'Clouds') {
                weatherIcon.src = `img/weatherIcon.webp`;
                document.body.classList.add(".clouds");
            }
        })
            let url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
            fetch(url1)
                .then(response => response.json())
                .then(json => {
                        firstWeather.innerHTML = '<img src ="http://openweathermap.org/img/wn/' + json.daily[1].weather[0]['icon'] + '@2x.png" alt ="icon"/>'
                        firstDegree.innerHTML = Math.round(json.daily[1].temp.day) + "&#176";
                        secondWeather.innerHTML = '<img src ="http://openweathermap.org/img/wn/' + json.daily[2].weather[0]['icon'] + '@2x.png" alt ="icon"/>'
                        secondDegree.innerHTML = Math.round(json.daily[2].temp.day) + "&#176";
                        thirdWeather.innerHTML = '<img src ="http://openweathermap.org/img/wn/' + json.daily[3].weather[0]['icon'] + '@2x.png" alt ="icon"/>'
                        thirdDegree.innerHTML = Math.round(json.daily[3].temp.day) + "&#176";
                        forthWeather.innerHTML = '<img src ="http://openweathermap.org/img/wn/' + json.daily[4].weather[0]['icon'] + '@2x.png" alt ="icon"/>'
                        forthDegree.innerHTML = Math.round(json.daily[4].temp.day) + "&#176";
                    }
                )}

showWeather();







