import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import CurrentWeather from './components/current-weather';
import { weatherApiKey, weatherApiUrl } from './components/api';
import { useState } from 'react';
import Forecast from './components/Forecast/forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [ForcastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange=(searchData) =>{
    const [lat, long ]=searchData.value.split(" ")
    const CurrentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=metric`)
    const ForcastWeatherFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=metric`)
    
    Promise.all([CurrentWeatherFetch, ForcastWeatherFetch])
    .then(async (response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();


      setCurrentWeather({city:searchData.label,...weatherResponse});
      setForecastWeather({city:searchData.label,...forecastResponse});
      
    }).catch(err => console.log(err));
  }


  console.log(currentWeather);
  console.log(ForcastWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather&&<CurrentWeather weatherData={currentWeather}/>}


      {ForcastWeather&&<Forecast data={ForcastWeather} />}
      
    </div>
  );
}

export default App;
