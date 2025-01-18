const cityInput = document.getElementById('cityInput');
const countryInput = document.getElementById('countryInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');
let city, country;
getWeatherBtn.addEventListener('click', function () {
    city = cityInput.value;
    country = countryInput.value;
    fetchWeatherData(city, country);
})


//API calling.
async function fetchWeatherData() {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/${country}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'API_KEY_FROM_RAPIDAPI',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        weatherResult.innerHTML = '';//clearing the previous data.
        weatherResult.innerHTML =//updating the data.
            `
        <div class="weather-item"><span>City:</span> ${result.name}</div>
        <div class="weather-item"><span>Country:</span> ${result.sys.country}</div>
        <div class="weather-item"><span>Temperature:</span> ${result.main.temp} °F</div>
        <div class="weather-item"><span>Tempreture feels like:</span> ${result.main.feels_like}</div>
        <div class="weather-item"><span>Weather feels like:</span> ${result.weather[0].description}</div>
        <div class="weather-item"><span>Humidity:</span> ${result.main.humidity} %</div>
        <div class="weather-item"><span>Wind Speed:</span> ${result.wind.speed} m/s</div>
        <div class="weather-item"><span>Wind Degree:</span> ${result.wind.deg}</div>
        <div class="weather-item"><span>Latitude:</span> ${result.coord.lon}</div>
        <div class="weather-item"><span>Longitude:</span> ${result.coord.lat}</div>
        <div class="weather-item"><span>Height from sea level:</span> ${result.main.sea_level}</div>
        <div class="weather-item"><span>Time Zone:</span> ${result.sys.timezone}</div>
    `;

    } catch (error) {
        console.error(error);
        weatherResult.innerHTML = '<p style="color: red;">Failed to fetch weather data. Please Enter the valid input fromat or try again.</p>';
    }
}

