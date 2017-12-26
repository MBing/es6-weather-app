import * as ELEMENTS from './elements.js';
import { Http } from './http.service.js';
import { WeatherData, WEATHER_PROXY_HANDLER } from './weather-data.js';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    const getURL = API_URL + CITY_NAME + '&units=metric&appid=' + API_KEY;

    if (!CITY_NAME) {
        return alert('Please enter a city name!')
    }

    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
    ELEMENTS.LOADING_TEXT.style.display = 'block';

    Http.fetchData(getURL)
        .then((responseData) => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);

            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => console.error(error));
}

function updateWeather(weatherData) {
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;

    ELEMENTS.LOADING_TEXT.style.display = 'none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}
