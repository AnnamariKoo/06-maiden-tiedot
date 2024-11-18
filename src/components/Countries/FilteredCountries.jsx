import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";
import Country from "../Country/Country";
import countries from "../../services/countries";

const FilteredCountries = (props) => {
  const [countryList, setCountryList] = useState([]),
    [notificationMessage, setNotificationMessage] = useState(""),
    [displayOneCountry, setDisplayOneCountry] = useState(false);

  useEffect(() => {
    const countryListTemp = props.countries.filter((country) =>
      country.name.common.toLowerCase().includes(props.searchTerm.toLowerCase())
    );
    setCountryList(countryListTemp);
    setNotificationMessage("");

    if (countryListTemp.length > 10) {
      setCountryList([]);
      if (props.searchTerm.length > 0) {
        setNotificationMessage("Too many matches, specify another filter.");
      }
    }
    setDisplayOneCountry(false);

    if (countryListTemp.length === 1) {
      setDisplayOneCountry(true);
    }
  }, [props.searchTerm]);

  return (
    <>
      <Notification message={notificationMessage} />
      {displayOneCountry && <Country country={countryList[0]} />}
      {!displayOneCountry && (
        <ol>
          {countryList.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button
                id={country.name.common}
                onClick={() => props.stateChanger(country.name.common)}
              >
                Show
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default FilteredCountries;
