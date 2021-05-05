import React from 'react';

const InputQuery = ({ value, setValue, activateSearch }) => {
  return (
    <div>
      <input type="text" id="ticker_name" name="ticker_name" value={value} onChange={e => setValue(e.target.value)} />
      <button type="button" onClick={activateSearch}>Search</button> 
    </div>
  );
};
export default InputQuery;
