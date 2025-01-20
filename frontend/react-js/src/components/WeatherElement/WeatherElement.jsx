import React, { useState } from 'react';
import './WeatherElement.css'
import Forecast from '../Forecast/Forecast'

export default class WeatherElement extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          weather: null,
          error: null,
        };
      }
    apiKey = "b624ed75946642388c7214300251601"
    baseUrl = "http://api.weatherapi.com/v1/forecast.json"


    fetchWeather = async(city) =>{
        const url = `${this.baseUrl}?key=${this.apiKey}&q=${city}&days=4`

        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("City not found.")
            }
            const data = await response.json()
            this.setState({weather: data, error: null})
            
          } catch (err) {
            this.setState({weather: null, error: err.message})
          }
    }



    componentDidMount(){
        this.fetchWeather(this.props.city)
    }

    render(){
        const { weather, error } = this.state;
        return(
            <div className='div' style={{backgroundImage: `linear-gradient(rgba(106, 4, 4, 0.1), rgba(190, 146, 146, 0.8)), url(${this.props.image})`}}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {weather ? (
                <div>
                    <h2 className='city'>{weather.location.name}, {weather.location.country}</h2>
                    <h3 className='date'>{weather.location.localtime}</h3>
                    <div className='outer'>
                        <div className='inner'>
                            <div className='display-block'>
                                <p>Temperature: {weather.current.temp_c} °C</p>
                                <p>Feels like: {weather.current.feelslike_c} °C</p>
                            </div>
                            <div >
                                <div className='icon' style={{backgroundImage: `url('${weather.current.condition.icon}')`, backgroundSize: "cover"}}></div>
                                <p style={{textAlign:"center"}}>{weather.current.condition.text}</p>
                            </div>
                        </div>
                        
                        <p>Windspeed {weather.current.wind_kph} km/h</p>
                        <p>Pressure {weather.current.pressure_mb} hPa</p>
                        <p>Humidity {weather.current.humidity}%</p>
                    </div>
                    <Forecast nextDays = {weather} />
                </div>
                ) : (
                <p>Ładowanie danych pogodowych...</p>
                )}
                
            </div>
        )
    }
};
