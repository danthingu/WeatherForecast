import axios from 'axios';


const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'a7343db0f5ef5a244aec68f0f62c0fec';
const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';


const getDailyWeather = (url) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => {
                if (response && response.status === 200) {

                    const location = {
                        name: response.data.city.name,
                        latitude: response.data.city.coord.lat,
                        longitude: response.data.city.coord.lon
                    };                    
                    console.log('LOCATION: ' + location.name);

                    const dailyForecasts = response.data.list.map(fc => {
                        console.log('dailyForecasts: ' + fc.weather[0].description);
                        console.log('dailyForecasts max temp: ' + fc.temp.max);
                        console.log('dailyForecasts min temp: ' + fc.temp.min);
                        return {
                                condition: fc.weather[0].description,
                                date: new Date(fc.dt * 1000),
                                icon: `${OPEN_WEATHER_IMG_URL}/${fc.weather[0].icon}.png`,
                                location: location,
                                temperature: {
                                    minimum: fc.temp.min,
                                    maximum: fc.temp.max
                                }
                            };
                        });
                    resolve(dailyForecasts);
                } else {
                    reject('Weather data not found');
                }
            })
            .catch(error => reject(error.message));
    });
};

class WeatherService {
    // getDailyWeatherByPosition(latitude, longitude) {
    //     if (!latitude) {
    //         throw Error('Latitude is required');
    //     }

    //     if (!longitude) {
    //         throw Error('Longitude is required');
    //     }

    //     latitude = '38.5891';
    //     longitude = '-121.3027';

    //     const url = `${OPEN_WEATHER_BASE_URL}/forecast/daily?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric&cnt=7`;
    //     console.log('url: ' + url);
    //     return getDailyWeather(url);
    // }

    getDailyWeatherByPosition({latitude, longitude}) {
        if (!latitude) {
            throw Error('Latitude is required');
        }

        if (!longitude) {
            throw Error('Longitude is required');
        }

        // latitude = '38.5891';
        // longitude = '-121.3027';

        const url = `${OPEN_WEATHER_BASE_URL}/forecast/daily?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric&cnt=7`;
        console.log('url: ' + url);
        return getDailyWeather(url);
    }
}

export default WeatherService;