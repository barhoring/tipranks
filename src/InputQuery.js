import { useState } from 'react';

const InputQuery = ({ value, setValue, activateSearch, }) => {

  const [intr, setIntr] = useState(false);

  const throuthling = () => {
      setIntr(setInterval(function(){ activateSearch(); console.log("value:", value); }, 3000));
  }

  const stopThrouthling = () => {
    clearInterval(intr);
    setIntr(false);
  }
  
  return (
    <div>
      <input type="text" id="ticker_name" name="ticker_name" value={value} onChange={e => { setValue(e.target.value); throuthling() }} onBlur={() => stopThrouthling() }  />
      <button type="button" onClick={activateSearch}>Search</button> 
    </div>
  );
};
export default InputQuery;
