import * as ELEMENTS from 'elements.js';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();

    if (!CITY_NAME) {
        return alert('Please enter a city name!')
    }

    console.log(CITY_NAME);
}
