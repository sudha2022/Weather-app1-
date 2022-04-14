let appId = '6a1a45c9471ba9eacc00196d3be2ecb0';
let units = 'metric';
let searchMethod; 


function getSearchMethod(searchTerm) {
if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
searchMethod = 'zip';
else
searchMethod = 'q';
}



function searchWeather(searchTerm) {
getSearchMethod(searchTerm);

fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
.then((result) => {
return result.json();
}).then((res) => {
init(res);
});
}



function init(resultFromServer) {





let resultDescription = resultFromServer.weather[0].description;





let city_name = document.getElementById('city-name');
let lat = document.getElementById('lat');
let lon = document.getElementById('lon');
city_name.innerHTML = resultFromServer.name;
lat.innerHTML = resultFromServer.coord.lat;
lon.innerHTML = resultFromServer.coord.lon;




let weather_main = document.getElementById('weather_main');
let weather_description = document.getElementById('weather_description');
weather_main.innerHTML = resultFromServer.weather[0].main;
weather_description.innerHTML = resultFromServer.weather[0].description;





let wind_speed = document.getElementById('wind_speed');
let wind_degree = document.getElementById('wind_degree');
wind_speed.innerHTML = resultFromServer.wind.speed;
wind_degree.innerHTML = resultFromServer.wind.deg;








let temp_current = document.getElementById('temp_current');
let temp_min = document.getElementById('temp_min');
let temp_max = document.getElementById('temp_max');
let humidity = document.getElementById('humidity');



temp_current.innerHTML = resultFromServer.main.temp;
temp_min.innerHTML = resultFromServer.main.temp_min;
temp_max.innerHTML = resultFromServer.main.temp_max;
humidity.innerHTML = resultFromServer.main.humidity;



let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
let temperatureElement = document.getElementById('temperature');
let humidityElement = document.getElementById('humidity');
let windSpeedElement = document.getElementById('windSpeed');
let cityHeader = document.getElementById('cityHeader');





setPositionForWeatherInfo();
}



function setPositionForWeatherInfo() {



}



document.getElementById('searchBtn').addEventListener('click', () => {
let searchTerm = document.getElementById('searchInput').value;
if (searchTerm)
searchWeather(searchTerm);
});