/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React  from 'react'
import weatherCloudy from '../assets/weather-cloudy.png'
const WeatherCard = ({weatherDetails}) => {
    console.log(weatherDetails);
  return (
    <div className='weather-section'>
        <div className="weather-card">
            <div className="weather-temp-c">
                {weatherDetails.current.temp_c}<sub>0</sub>
                </div>
            <div className="weather-info">
                <span>🌈{weatherDetails.current.humidity}</span>
                <span>⛅{weatherDetails.current.cloud}</span>
            </div>
            <div className="weather-place">
                {weatherDetails.location.name},{}{weatherDetails.location.region},{weatherDetails.location.region}
            </div>
            <div className="weather-avatar">
                <img src={weatherCloudy} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WeatherCard