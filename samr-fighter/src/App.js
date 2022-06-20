import { useState } from "react";
import "./app.scss";
import LevelSelect from "./pages/levelSelect";
import logo from "./assets/logo.svg";
import Level from "./pages/level";
import CombatSystem from "./combat-system";
import GameWrapper from "./combat-system/gameWrapper";

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [fadeOutLogo, setFadeOutLogo] = useState(false);
  const [level, setLevel] = useState(null);

  const onLogoClick = () => {
    setFadeOutLogo(true);
    setTimeout(() => setShowLogo(false), 500);
  };

  return (
      // <GameWrapper>
        <div className="layout">
          {!level ? (
              // <GameWrapper>
                  <LevelSelect setLevel={setLevel}/>
              // </GameWrapper>

          ) : (
              <GameWrapper>
                  <Level background={level.image} />
              </GameWrapper>
          )}
          {showLogo && (
              <div
                  className={`game-logo-container ${fadeOutLogo && "fade-out"}`}
                  onClick={onLogoClick}
              >
                <img src={logo} alt="samr-fighter" className="game-logo" />
                <p>(Click to begin)</p>
              </div>
          )}
        </div>
      // </GameWrapper>

  );
}

export default App;
