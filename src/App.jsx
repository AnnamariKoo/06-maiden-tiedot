import { useState, useEffect } from "react";
import countriesService from "./services/countries.js";
import Filter from "./components/Filter/Filter.jsx";
import Notification from "./components/Notification/Notification.jsx";

const App = () => {
  const [displayCountry, setDisplayCountry] = useState(false),
    [searchTerm, setSearchTerm] = useState(""),
    [notificationMessage, setNotificationMessage] = useState(null),
    [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  const handleSearchChange = (event) => {
    console.log("countries", countries);

    setSearchTerm(event.target.value);
    let filteredCountriesLet = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredCountriesLet.length > 0 && filteredCountriesLet.length < 11) {
      setDisplayCountry(true);
      console.log("displayCountry true:", displayCountry);
    } else {
      setDisplayCountry(false);
      console.log("displayCountry false:", displayCountry);
    }
    if (filteredCountriesLet.length > 10) {
      setNotificationMessage(`Too many matches, specify another filter.`);
    } else {
      setNotificationMessage("");
    }
  };

  return (
    <div>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <Notification message={notificationMessage} />
      <ul>
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
      </ul>
    </div>
  );
};

export default App;
