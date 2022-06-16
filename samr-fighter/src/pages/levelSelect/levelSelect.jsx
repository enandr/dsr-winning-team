import levelConfig from "../../data/levelConfig";
import samr from "../../assets/samr.svg";
import salesforce from "../../assets/salesforce.svg";

const LevelSelect = () => {
  return (
    <div className="level-select">
      <h1 className="choose-level-text">Choose your level:</h1>
      <div className="level-select-card-container">
        {levelConfig.map(
          ({ title, image, movesPerTurn, salesforceHealth, difficulty }, i) => (
            <div className="level-select-card" key={i}>
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
