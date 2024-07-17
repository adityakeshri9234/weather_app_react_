import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Ranchi",
        temp:"35.05",
        min_temp:"35.05",
        max_temp:"35.05",
        humidity:"50",
        feels_like:"32.96",
        weather: "Haze",
        
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return (
       
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        

       
    );
}