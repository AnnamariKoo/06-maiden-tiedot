import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  //Maan tiedot
  const languagesArray = Object.values(country.languages);
  const altText = country.flags.alt;
  const pngImg = country.flags.png;
  const capital = country.capital;

  //Säätiedot
  const api_key = import.meta.env.VITE_SOME_KEY;
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (capital) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&appid=${api_key}`
    );
    return response.data;
  };

  useEffect(() => {
    (async () => {
      try {
        let weather = await getWeather(capital);
        setWeatherData(weather);
      } catch (error) {
        console.log("Something went wrong, error: ", error);
      }
    })();
  }, [capital]);

  return (
    <>
      <div className="display-country">
        <div className="country-info">
          <h1>{country.name.common}</h1>
          <p>Capital: {capital}</p>
          <p>Area: {country.area}</p>
          <h4>Languages:</h4>
          <ul>
            {languagesArray.map((languages) => (
              <li key={languages}>{languages}</li>
            ))}
          </ul>
        </div>
        <img className="flag-image" src={pngImg} alt={altText} />
      </div>
      <h2>Weather in {capital}</h2>
      <p>temperature {(weatherData?.main?.temp - 272.15).toFixed(2)} Celcius</p>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
      />
      <p>wind {weatherData?.wind?.speed} m/s</p>
    </>
  );
};

export default Country;
