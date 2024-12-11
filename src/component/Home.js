import React, { useState, useEffect } from "react";
import Weather from "./weather";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [location, setLocation] = useState(null);
  let navigate = useNavigate();
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Geolocation success:", position);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setLocation({ latitude, longitude });
          getLocation(latitude, longitude);
        },
        (err) => {
          console.error("Geolocation error:", err); // Log error to console
        },
        { timeout: 10000 } // Timeout after 10 seconds
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  async function getLocation(latitude, longitude) {
    let API_KEY = "eff30c2fcd506981e5659914bbf59af0";
    let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("location name - ", data[0]?.name);
    setLocationName(data[0]?.name);
  }

  console.log("location-", location);

  let handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div className="weather-header">
        <h1>Weather App</h1>
        <button className="button_style" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {location === null ? (
        <h1>Loading........</h1>
      ) : (
        <div>
          <div className="location-detail-style">
            <h4 style={{textAlign:'center'}}>You are now in {locationName}</h4>
            <div className="wether-location">
              <h4>Latitude: {location.latitude}</h4>
              <h4>Longitude: {location.longitude}</h4>
            </div>
          </div>
          {location && (
            <Weather
              latitude={location.latitude}
              longitude={location.longitude}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
