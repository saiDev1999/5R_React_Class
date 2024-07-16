import axios from "axios";
import { useEffect, useState } from "react";

// ["India","Pakistan","Bangladesh"]

const CountryListing = () => {
  const [countries, setCoutries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryData, setSelectedCountryData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    console.log(response, "response");
    const result = nameExtractor(response.data);
    console.log(result, "result");
    setCoutries(result);
  };

  const nameExtractor = (data) => {
    return data.map((each) => each.name.official);
  };

  const selectedCountryHandler = (event) => {
    setSelectedCountry(event.target.value);
    fetchSelectedCountry(event.target.value);
  };

  const fetchSelectedCountry = async (countryName) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    console.log(response, "selected country response");
    setSelectedCountryData(response.data[0]);
  };

  return (
    <>
      <h1>Country listing</h1>
      <select value={selectedCountry} onChange={selectedCountryHandler}>
        {countries.map((eachCountry) => (
          <option value={eachCountry}>{eachCountry}</option>
        ))}
      </select>
      <h2>{selectedCountry}</h2>
      {Object.keys(selectedCountryData).length > 0 && (
        <>
          <h2>Capital city {selectedCountryData.capital[0]}</h2>
          <h2>Country flag {selectedCountryData.flag}</h2>
          <img src={selectedCountryData.flags.png} width={100} height={100} />
        </>
      )}
    </>
  );
};

export default CountryListing;
