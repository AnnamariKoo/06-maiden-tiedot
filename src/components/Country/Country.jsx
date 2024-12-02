import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const languagesArray = Object.values(country.languages);
  const altText = country.flags.alt;
  const pngImg = country.flags.png;
  const capital = country.capital;
  const api_key = import.meta.env.VITE_SOME_KEY;

  const [weatherData, setWeatherData] = useState(null);

  // const weather = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`;
  // console.log("weather", weather);

  const getWeather = async (capital) => {
    console.log("capital[0]", capital[0]);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&appid=${api_key}`
    );
    return response.data;
  };

  useEffect(() => {
    (async () => {
      try {
        let weather = await getWeather(capital);
        console.log("weather", weather);
        setWeatherData(weather);
      } catch (error) {
        console.log("Something went wrong, error: ", error);
      }
    })();
  }, [capital]);

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {country.area}</p>
      <h4>Languages:</h4>
      <ul>
        {languagesArray.map((languages) => (
          <li key={languages}>{languages}</li>
        ))}
      </ul>
      <img className="flag-image" src={pngImg} alt={altText} />
      <h2>Weather in {capital}</h2>
      <p>temperature {(weatherData?.main?.temp - 272.15).toFixed(2)} Celcius</p>
      <p>tähän sääikoni</p>
      <p>wind {weatherData?.wind?.speed} m/s</p>
    </>
  );
};

export default Country;
