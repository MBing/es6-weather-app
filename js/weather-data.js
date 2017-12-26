export class WeatherData {
    constructor (cityName, description) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = '';
    }
}

export const WEATHER_PROXY_HANDLER = {
    get: function (target, propertyKey) {
        return Reflect.get(target, propertyKey);
    },
    set: function (target, propertyKey, value) {
        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, propertyKey, newValue);
    }
};
