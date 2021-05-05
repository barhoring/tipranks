import React, { useState, useEffect } from 'react';
import StockBox from "./StockBox";

const api_uri = `https://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=M`;

const StockList = () => {
  const [hasError, setErrors] = useState(false);
  const [stocks, setStocks] = useState({});

  useEffect(() => {
    fetch(api_uri)
            .then((res) => res.json())
            .then((res) => setStocks(res))
            .catch((err) => setErrors(err));
  }, []);

  const stocksArray = Object.values(stocks); 
  return (
    <div className="results">
      <ul>
        {
          stocksArray.map(s => {
          return <StockBox {...s} key={s.uid} />
        })}
      </ul>
      {hasError}
    </div>
  );
};
export default StockList;
