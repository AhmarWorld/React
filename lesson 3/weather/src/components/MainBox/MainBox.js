import './MainBox.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import WeatherCard from '../WeatherCard/WeatherCard';

const API = {
    key: '7f7a019a2371f95afe97771c376705b7',
    base: 'https://api.openweathermap.org/data/2.5/'
}

export default function MainBox() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                })
        }
    }

    return (
        <div className={
            (typeof weather.main != "undefined")
                ? ((weather.main.temp > 16)
                    ? 'main-weather warm' : 'main-weather')
                : 'main-weather'}>
            <main>
                <SearchBar search={search} query={query} setQuery={setQuery} />
                {(typeof weather.main != "undefined") ? (
                    <WeatherCard weather={weather} />
                ) : ('')}
            </main>
        </div>
    )
}