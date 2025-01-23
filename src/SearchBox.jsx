import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "80788e43cd0d84bff65659f3da6be3a3";
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                country: jsonResponse.sys.country,
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                fellsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);

        } catch (error) {
            seterror(true);
        }

    };
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="Enter city name" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No Such Place Exists!</p>}
            </form>
        </div>
    );
}