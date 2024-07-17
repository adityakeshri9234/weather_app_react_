import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
export default function SearchBox({updateInfo}){
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="8f971d29013139b2b52dfd86db34039f";

    let getWeatherinfo= async ()=>{
        try{let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            min_temp:jsonResponse.main.temp_min,
            max_temp:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].main,
        };
        
        return result;
    }
    catch(err){
        throw err;
    }
    }
    
    let [city,setCity]=useState("");
    let [error,Seterror]=useState(false);
    let handleCity=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{event.preventDefault();
        
        console.log(city);
        setCity("");
        let newInfo=await getWeatherinfo();
        updateInfo(newInfo);
        Seterror(false);
        }
        catch(err){
            Seterror(true);
        }
    }
    return (

        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
                <br /><br />
                <Button variant="outlined" type="submit">Submit</Button>
                {error && <p style={{color:"red"}}>No such place exists !</p>}
            </form>
            

        </div>
    );
}