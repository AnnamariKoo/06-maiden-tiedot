import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";

const FilteredCountries = (props) => {
  const [countryList, setCountryList] = useState([]),
    [notificationMessage, setNotificationMessage] = useState("");

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
  }, [props.searchTerm]);

  return (
    <>
      <Notification message={notificationMessage} />
      <ol>
        {countryList.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ol>
    </>
  );
};

export default FilteredCountries;
