let now = new Date ();
let h2 = document.querySelector("h2");

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

h2.innerHTML = `${day}  ${hours}:${minutes}`;

function displayCelcius(event) {
  event.preventDefault();
  let showCelcius = document.querySelector("li.degrees-celcius");
  showCelcius.innerHTML = `23`; 
}

function displayFahrenheit (event) {
  event.preventDefault();
  let showFahrenheit = document.querySelector("li.degrees-celcius");
  showFahrenheit.innerHTML = `74`;
}


//let celcius = document.querySelector("#display-in-celcius");
//celcius.addEventListener("click", displayCelcius);

//let fahrenheit = document.querySelector("#display-in-fahrenheit");
//fahrenheit.addEventListener("click", displayFahrenheit);

function displayCity (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  let displayCity = document.querySelector("span.display-city");
  displayCity.innerHTML = `${searchInput.value}`;
  let apiKey = "6d11e0cb89ea93312b521b8c7b379464";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}


function showTemperature(response){
  let temperature = Math.round(response.data.main.temp);
  let description = document.querySelector(".temperature-description");
  let country = document.querySelector(".country-description");
  let showCelcius = document.querySelector(".degrees-celcius");
  showCelcius.innerHTML = `${temperature}  °C`; 
  description.innerHTML = response.data.weather[0].description;
  country.innerHTML = response.data.sys.country;

}

function getCurrentPosition () {
  navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(position) {
  let latitude = 51.2083801;
  let longitude = 3.2251456999999997;
  let apiKey =  "6d11e0cb89ea93312b521b8c7b379464";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=51.2083801&lon=3.2251456999999997&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);


let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);