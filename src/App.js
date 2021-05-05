import './App.css';
import InputQuery from './InputQuery';
import Results from './Results';
import  { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [flag, setFlag] = useState(false);


  const activateSearch = () => {
    debugger;
    setFlag(!flag)
  }

  // const throuthling = () => {
  //   console.log("value:", value);
  //   setIntr(setInterval(function(){ console.log("value", value) }, 700));
  // }
  
  // const stopThrouthling = () => {
  //   clearInterval(intr);
  // }

  return (
    <div className="App">
      <InputQuery {...{ value, setValue, activateSearch} } />
      <Results {...{ flag, value }} />
    </div>
  );
}

export default App;
