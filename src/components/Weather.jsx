import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('London');

    const fetchWeather = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&unit=metrics`);
            const data = response.data;
            setWeather(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=> {
        fetchWeather()
    }, [city]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    if(!weather) {
        return <div>Loading...</div>
    }

    return (
        <div className="text-center p-20 bg-blue-100 m-4">
            <h2 className="font-bold text-3xl text-blue-400 mb-5">Weather App</h2>
            <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={handleCityChange}
                placeholder="What's the weather in your city?"
                className="border p-2"
            />
            <button type="submit" onClick={handleSubmit} className="bg-blue-300 ml-4 p-2 rounded-md hover:bg-blue-500">Search</button>
            {weather && (
                <div className="mt-6 bg-blue-300 py-6 rounded-lg">
                    <h3><span className="font-semibold">City:</span> {weather.name}</h3>
                    <h3><span className="font-semibold">Weather:</span> {weather.weather[0].description}</h3>
                    <h3><span className="font-semibold">Temperature:</span> {weather.main.temp}°C</h3>
                    <h3><span className="font-semibold">Humidity:</span> {weather.main.humidity}%</h3>
                    <h3><span className="font-semibold">Pressure:</span> {weather.main.pressure}mb</h3>
                    <p><span className="font-semibold">Feels Like:</span> {weather.main.feels_like}°C</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                </div>
            )}
        </div>
    )
}
export default Weather;
