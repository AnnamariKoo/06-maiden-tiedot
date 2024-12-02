import { useState, useEffect } from "react";
import axios from "axios";

const DisplayWeather = () => {
  const api_key = import.meta.env.VITE_SOME_KEY;
  console.log("api_key", api_key);
  const weather = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`;
};

// const weatherIcon = `https://api.openweathermap.org/data/2.5/weather?q=${capital}`;
// console.log("weatherIcon", weatherIcon);

// const getWeather = async () => {
//   const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`);
//   return await request.then((response) => response.data);
// };

useEffect(() => {
  const result = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
  );
  console.log(result);
}, []);

// const foo = getWeather();
// console.log("foo", foo);

return (
  <>
    <h2>Weather in {props.capital}</h2>
    <p>temperature</p>
    <p>tähän sääikoni</p>
    <p>wind m/s</p>
  </>
);

export default DisplayWeather;
