import levelConfig from "../../data/levelConfig";
import samr from "../../assets/samr.svg";
import salesforce from "../../assets/salesforce.svg";
import { useEffect, useState } from "react";

const actionWords = [
  "Boom",
  "Pow",
  "Blam",
  "Whack",
  "Slam",
  "bif",
  "bam",
  "whomp",
  "thump",
  "smash",
  "zowie",
  "bang",
  "wham",
];

const LevelSelect = (props) => {
    const { setLevel,gameController } = props;
  const [actionWord, setActionWord] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActionWord(Math.floor(Math.random() * actionWords.length));
    }, 2000);
  }, []);

  return (
    <div className="level-select">
      <h1 className="choose-level-text">Choose your level:</h1>
        {/*{gameController && (
        // USE THIS CODE IF YOU WANT TO TEST RANDOM ATTACKS. DELETE IF NOT USED
            <>
                <h1>SAMR HEALTH: {gameController.samrHealth}</h1>
                <h1>ENEMY HEALTH: {gameController.enemyHealth}</h1>
                <button onClick={() => {
                    const moveList = ['block','punch','kick','duck'];
                    const samrAttack = moveList[Math.floor(Math.random()*moveList.length)];
                    const enemyAttack = moveList[Math.floor(Math.random()*moveList.length)];
                    console.log({enemyAttack, samrAttack})
                    gameController.attack([samrAttack],[enemyAttack])
                }}>ATTACK</button>
            </>
        )}*/}
      <img className="samr-animated" src={samr} alt="samr" />
      <img className="samr-animated salesforce" src={salesforce} alt="samr" />
      <p className="fight-text">{actionWords[actionWord]}!</p>

      <div className="level-select-card-container">
        {levelConfig.map(
          ({ title, image, movesPerTurn, salesforceHealth, difficulty }, i) => (
            <div
              className="level-select-card"
              key={i}
              onClick={() => setLevel(levelConfig[i])}
            >
              <img className="level-select-background" src={image} alt="" />

              <div className="level-select-card-background">
                <h2>{title}</h2>
                <div className="level-select-card-info">
                  <div className="fighter-info">
                    <img src={salesforce} alt="cloud" />
                    <p>{salesforceHealth} HP</p>
                  </div>
                  <p>vs.</p>
                  <div className="fighter-info">
                    <img src={samr} alt="cloud" />
                    <p>10 HP</p>
                  </div>
                </div>
                <div className="level-select-card-difficulty">
                  <p>{difficulty}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LevelSelect;
