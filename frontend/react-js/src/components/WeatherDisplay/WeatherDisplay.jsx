import React, { useState } from 'react';
import WeatherElement from "../WeatherElement/WeatherElement";
import './weatherDisplay.css'


export default class WeatherDisplay extends React.Component
{
   
    render(){
        return(
            <div className='container'>
                <WeatherElement city = "Gliwice" image ="https://cdn.pixabay.com/photo/2019/11/18/12/34/gliwice-4634722_1280.jpg" />
                <WeatherElement city="Hamburg" image ="https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_1280.jpg"/>        
            </div>
        )
    }
};
