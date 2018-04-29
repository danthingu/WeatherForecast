import React, { Component } from 'react';

import  WeatherDisplay from './WeatherDisplay';
import {LocationService} from './LocationService';
import WeatherService from './WeatherService';


const weatherService = new WeatherService();
const locationService = new LocationService();


class WeatherMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDailyWeather: false, 
        }
    }

    componentDidMount() {
        locationService
            .getCurrentPosition()
            .then(position => {
                this.loadDailyWeatherByPosition(position);
            })
            .catch(error => console.log(error));      
    }

    // loadDailyWeatherByPosition(latitude, longitude) {
    //     weatherService.getDailyWeatherByPosition(latitude, longitude).then(res => res.json()).then(dailyForecasts => { this.setState(() => ({dailyForecasts: dailyForecasts, showDailyWeather: true}))})
    //     .catch(error => console.log("this is error: " + error));
    // }

    loadDailyWeatherByPosition(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getDailyWeatherByPosition(position)
            .then(dailyForecasts => {
                this.setState(() => ({ dailyForecasts: dailyForecasts, showDailyWeather: true }));
            })
            .catch(error => console.log(error));
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

