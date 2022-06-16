import { useState } from "react";
import "./app.scss";
import LevelSelect from "./pages/levelSelect";
import logo from "./assets/logo.svg";
import Level from "./pages/level";

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [fadeOutLogo, setFadeOutLogo] = useState(false);
  const [level, setLevel] = useState(null);

  const onLogoClick = () => {
    setFadeOutLogo(true);
    setTimeout(() => setShowLogo(false), 500);
  };

  return (
    <div className="layout">
      {!level ? (
        <LevelSelect setLevel={setLevel} />
      ) : (
        <Level background={level.image} />
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
  );
}

export default App;
