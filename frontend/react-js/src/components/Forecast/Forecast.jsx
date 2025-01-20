import React, { useState } from 'react';
import './Forecast.css'
import ForecastElement from '../ForecastElement/ForecastElement';

export default class Forecast extends React.Component
{
    render(){
        return(
            <div>
                <h2 className='forecastHeader'>Weather Forecast</h2>
                <div className='forecast'>
                    <ForecastElement info = {this.props.nextDays.forecast.forecastday[1]}/>
                    <ForecastElement info = {this.props.nextDays.forecast.forecastday[2]}/>
                    <ForecastElement info = {this.props.nextDays.forecast.forecastday[3]}/>
                </div>
            </div>
        )
    }
}; 