// searchButton function
const searchButton = () => {

    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;
    cityInput.value = '';
    const API_KEY = `5b6173f14f275a6109013c87b7876ad7`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}


// display weather function
const displayTemperature = city => {
    const div = document.getElementById('weather display');
    div.innerHTML = `
        <img id="img" src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="">
        <h1 >${city.name}</h1>
        <h3 ><span>${city.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${city.weather[0].main}</h1>`




}