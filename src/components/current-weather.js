import React from 'react'
import "./current-weather.css"
import {titleCase} from "title-case";
const CurrentWeather = ({weatherData}) => {
  return (
    <div className='weather'>
      <div className="top">
        <div>
          <p className="city">{weatherData.city}</p>
          <p className="weather-description">{titleCase(weatherData.weather[0].description)}</p>
        </div>
        <img src={`icons/${weatherData.weather[0].icon}.png`} alt="" className='weather-icon' />

      </div>

      <div className="bottom">
        <p className="temperature">{Number(weatherData.main.temp).toFixed()}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{weatherData.main.feels_like}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{weatherData.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{weatherData.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{weatherData.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather