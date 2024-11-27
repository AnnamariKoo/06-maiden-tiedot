const Country = ({ country }) => {
  const languagesArray = Object.values(country.languages);
  const altText = country.flags.alt;
  const pngImg = country.flags.png;

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h4>Languages:</h4>
      <ul>
        {languagesArray.map((languages) => (
          <li key={languages}>{languages}</li>
        ))}
      </ul>
      <img className="flag-image" src={pngImg} alt={altText} />
      <h2>Weather in {country.capital}</h2>
      <p>temperature</p>
      <p>tähän sääikoni</p>
      <p>wind</p>
    </>
  );
};

export default Country;
