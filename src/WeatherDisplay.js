import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import DailyWeatherForecastCard from './DailyWeatherForecastItem';
const options = {
    items: 3,
    nav: false,
    rewind: true,
    autoplay: false
};

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        console.log("hello: " + this.props.dailyForecasts);
    }

    render() {
        return (
            <div className="daily-weather-display">
                <div className="text-center h5 pt-2">Daily</div>                
                <div className="carousel">
                    <OwlCarousel ref={el => this.carousel = el} options={options}>
                        {
                            !!this.props.dailyForecasts && this.props.dailyForecasts.map((fc, i) => (
                                <DailyWeatherForecastCard forecast={fc} key={i} />
                            ))
                        }
                    </OwlCarousel>
                </div>
                <div className="carousel-nav" style={{left: 0}}>
                    <i className="fa fa-chevron-left fa-lg pl-2" onClick={() => this.carousel.prev()}></i>
                </div>
                <div className="carousel-nav" style={{right: 0}}>
                    <i className="fa fa-chevron-right fa-lg pr-2" onClick={() => this.carousel.next()}></i>
                </div>
            </div>
        )
    }
}

export default WeatherDisplay;