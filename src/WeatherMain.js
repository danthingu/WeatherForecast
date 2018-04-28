import React, { Component } from 'react';

import  WeatherDisplay from './WeatherDisplay';
import WeatherService from './WeatherService';


const weatherService = new WeatherService();
class WeatherMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDailyWeather: false, 
        }
    }

    componentWillMount() {
        this.loadDailyWeatherByPosition('38.5891', '-121.3027');
    }

    loadDailyWeatherByPosition(latitude, longitude) {
        weatherService.getDailyWeatherByPosition(latitude, longitude).then(res => res.json()).then(dailyForecasts => { this.setState(() => ({dailyForecasts: dailyForecasts, showDailyWeather: true}))})
        .catch(error => console.log("this is error: " + error));
    }

    render() {
        return (
            <div>
                <WeatherDisplay dailyForecasts = {this.state.dailyForecasts} />
            </div>
        )
    }
}

export default WeatherMain;

