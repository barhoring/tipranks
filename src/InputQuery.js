import { useState } from 'react';

const InputQuery = ({ value, setValue, activateSearch, }) => {

  const [intr, setIntr] = useState({});

  const throuthling = () => {
    console.log("value:", value);
    setIntr(setInterval(function(){ activateSearch() }, 1500));
    // setIntr(setInterval(function(){ console.log("value", value) }, 700));
  }
  
  return (
    <div>
      {/* <input onBlur={() => stopThrouthling() } onFocus={() => throuthling()} type="text" id="ticker_name" name="ticker_name" value={value} onChange={e => setValue(e.target.value) } */}
      <input type="text" id="ticker_name" name="ticker_name" value={value} onChange={e => { setValue(e.target.value); throuthling() } }
       />
      <button type="button" onClick={activateSearch}>Search</button> 
    </div>
  );
};
export default InputQuery;
