import React, { useState } from 'react';
import './forecastElement.css'

export default class ForecastElement extends React.Component
{
    render(){
        return(
            <div className='element'>
                <p>{this.props.info.date}</p>
                <p>{this.props.info.day.avgtemp_c} °C</p>
                
                <div className="iconSmall" style={{backgroundImage: `linear-gradient(rgba(106, 4, 4, 0.1), rgba(190, 146, 146, 0.8)), url(${this.props.info.day.condition.icon})`}}></div>
                <p>{this.props.info.day.condition.text}</p>
            </div>
        )
    }
};