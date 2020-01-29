import React from "react";

const WeatherCard = ({weatherData})=>{
      if(!weatherData){
          return <p>Loding</p>
      }
      const weather = weatherData.weather[0]
      const weatherIcon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
      const temp = Math.floor(weatherData.main.temp)
      console.log(weatherData.main.temp)
    return (
      <div className="card bg-info text-center text-light " style={{width: 400,}}>
      <div className="card-header bg-secondary ">{weatherData.name}</div>
        <div className="card-body">
          <img src={weatherIcon} alt=""/>
          <h3>{weather.main}</h3>
          <p>{weather.description}</p>
          <h6 className='display-4'>{temp}</h6>
        </div>
      </div>
    );
  }


export default WeatherCard;
