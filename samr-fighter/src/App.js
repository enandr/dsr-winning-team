import "./app.scss";
import LevelSelect from "./pages/levelSelect";
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
    <div className="layout">
      <LevelSelect />
    </div>
  );
}

export default App;
