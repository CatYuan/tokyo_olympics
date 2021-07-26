import React, { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://mockend.com/catyuan/tokyo_olympics/countries?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log("data: ", data);
      });
  }, []);

  // print out countries each time the variable changes
  // useEffect(() => {
  //   console.log("countries: ", countries);
  // }, [countries]);

  return (
    <ul>
      {countries &&
        countries.map((country) => (
          <li key={country.id}>{country.country_name}</li>
        ))}
    </ul>
  );
};

export default Countries;
