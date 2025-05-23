import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let data = "My Data";
const [name,SetName] = useState("PRABIN");

 let counts = 0; // resets to 0 on every render
const [count, setCount] = useState(0);

const submitHandle = () =>{
  SetName("Example");
  data = "Another Data";
}

const countIncrement = () =>{
  setCount(count + 1);
}

  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <br></br> 
          Using State - {name} 

          <br></br>
          <br></br>
          Using Javascript variable - {data}
            <br></br>
          <br></br>

        <input type="button" value="SUBMIT" onClick={submitHandle}/>

          <br></br>
          <br></br>
          
         Count value - {count}
            <br></br>
          <input type="button" value="Count++" onClick={countIncrement}/>
          <br></br>
          <br></br>
          <button onClick={() => counts++}>Let Count: {counts}</button>

    </div>
  );
}

export default App;
