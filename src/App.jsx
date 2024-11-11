import { useState, useEffect } from "react";
import countriesService from "./services/countries.js";
import Filter from "./components/Filter/Filter.jsx";
import Notification from "./components/Notification/Notification.jsx";
import FilteredCountries from "./components/Countries/FilteredCountries.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""),
    [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <FilteredCountries searchTerm={searchTerm} countries={countries} />
    </div>
  );
};

export default App;
