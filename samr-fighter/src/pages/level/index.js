import "./level.scss";
import samr from "../../assets/samr.svg";
import salesforce from "../../assets/salesforce.svg";
import Health from "./health";

function Level({ background }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `${background}`,
      }}
    >
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
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "2rem",
        }}
      >
        <Health name="Sales The Force" currentHealth={4} maxHealth={5} />
        <Health name="SAMR" currentHealth={3} maxHealth={5} />
      </div>
      <div className="players-wrap">
        <img src={salesforce} />
        <img src={samr} />
      </div>
      <div className="moves-wrap">
        <div className="move-wrap"></div>
        <div className="moves">
          <button onClick={() => {}}>Punch </button>
          <button>Kick</button>
          <button>Block</button>
          <button>Duck</button>
        </div>
        <div className="move-wrap"></div>
      </div>
    </div>
  );
}
export default Level;
