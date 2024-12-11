import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Weather = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get("http://localhost:3000/weather", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          params: { latitude, longitude },
        });
        setWeather(response.data);
      } catch (err) {
        console.error("No weather data- ", err);
      }
    };

    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude]);

  console.log("weather---", weather);

  return weather === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div className="today-weather-style">
        <h3>Today's Weather</h3>
        <p>Temperature: {weather?.currentWeather?.main?.temp}°C</p>
      </div>
      <h4 style={{textAlign:'center'}}>Next 5 Day's Forecast</h4>
      <ul className="today-weather-style">
        {weather.weatherForecast.list.map((day, index) => (
          <li className="list-style" key={index}>
            {moment(day.dt_txt).format("dddd, MMMM Do YYYY, h:mm a")} :{" "}
            {day.main.temp}°C
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
