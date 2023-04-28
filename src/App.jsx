import { useState } from "react";

import axios from "axios";
 

const App = () => {
const API_KEY = "ee3952d8068c6eba1249a7831e17c12c"
const [data, setData] = useState({});
const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

    const searchLocation = () => {
        if(event.key === 'Enter'){
            axios.get(url).then((response)=>{
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
        
    }


    return (
        <div className="app">
        <div className="search">
            <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Enter location"
            type="text"></input>
        </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                    {data.main ? <h1>{data.main.temp} °C</h1> : null}
                       
                    </div>
                    <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                    
                        
                    </div>
                </div>


            {data.main != undefined && 
                <div className="bottom">
                    <div className="feels">
                    <p>Temp min:</p> 
                    {data.main ? <p className="bold">{data.main.temp_min} °C</p> : null}
                    
                    </div>
                    <div className="feels">
                    <p>Temp max:</p>
                    {data.main ? <p className="bold">{data.main.temp_max} °C</p> : null}
                    
                    </div>
                    <div className="humidity">
                    <p>Humidity</p> 
                    {data.main ? <p className="bold">{data.main.humidity} %</p> : null} 
                    </div>
                    <div className="wind">
                    <p>Wind speed</p>
                    {data.wind ? <p className="bold">{data.wind.speed} km/h</p>: null}
                    </div>
                </div> }

                
            </div>
        </div>
    );
}

export default App;

