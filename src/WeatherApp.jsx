import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]= useState({
        country: "",
        city: "",
        temp: "",
        tempMin:"",
        tempMax: "",
        humidity: "",
        fellsLike:"",
        weather: "",
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Shivam Patel</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}