import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [stateCar, setStateCar] = useState(false);

  const ecenderApagar = () => {
    setStateCar(!stateCar)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
       <button onClick={ecenderApagar}>Ecender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
