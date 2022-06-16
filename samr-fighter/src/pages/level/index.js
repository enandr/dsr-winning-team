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
