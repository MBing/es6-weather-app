import * as ELEMENTS from 'elements.js';
import { Http } from './http.service.js';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    const getURL = API_URL + CITY_NAME + '&units=metric&appid=' + API_KEY;

    if (!CITY_NAME) {
        return alert('Please enter a city name!')
    }
    
    Http.fetchData(getURL)
        .then((responseData) => {
            console.log(responseData)
        })
        .catch(error => console.error(error));
}
