import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import CombatSystem from "./combat-system";

function App() {
  const [combat] = useState(new CombatSystem('easy'))
  useEffect(() => {
    console.log('samr available moves',combat.availableMoves('samr'))
    console.log('enemy available moves',combat.availableMoves('enemy'))
    console.log('enemy health',combat.getEnemyHealth())
    console.log('samr health',combat.getSamrHealth())
    console.log('moves per turn',combat.getMovesPerTurn())
    combat.attack(['punch'],['kick'])
    console.log('samr available moves',combat.availableMoves('samr'))
    console.log('enemy available moves',combat.availableMoves('enemy'))
    console.log('enemy health',combat.getEnemyHealth())
    console.log('samr health',combat.getSamrHealth())
    console.log('moves per turn',combat.getMovesPerTurn())
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
