import heartland from "../assets/heartland.jpg";
import weird from "../assets/weird.jpg";
import liberty from "../assets/liberty.jpg";
import mothership from "../assets/mothership.png";
import maple from "../assets/maple.jpg";

const levelConfig = [
  {
    title: "Heartland",
    image: heartland,
    movesPerTurn: 1,
    salesforceHealth: 5,
    difficulty: "Easy",
  },
  {
    title: "Maple",
    image: maple,
    movesPerTurn: 2,
    salesforceHealth: 7,
    difficulty: "Medium",
  },
  {
    title: "Liberty",
    image: liberty,
    movesPerTurn: 3,
    salesforceHealth: 9,
    difficulty: "Hard",
  },
  {
    title: "Weird",
    image: weird,
    movesPerTurn: 4,
    salesforceHealth: 11,
    difficulty: "Very Hard",
  },
  {
    title: "Mothership",
    image: mothership,
    movesPerTurn: 5,
    salesforceHealth: 15,
    difficulty: "Xtreme",
  },
];

export default levelConfig;
