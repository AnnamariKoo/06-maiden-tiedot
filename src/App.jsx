import { useState, useEffect } from "react";
import countriesService from "./services/countries.js";
import Filter from "./components/Filter/Filter.jsx";

const App = () => {
  const [countries, setCountries] = useState([]),
    [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    countriesService.getAll().then((response) => {
      console.log("response", response);
      setCountries(response);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Filter />
    </div>
  );
};

export default App;
