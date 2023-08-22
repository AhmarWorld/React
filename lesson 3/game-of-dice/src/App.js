import { useState } from "react";
import "./App.css";
import GameBox from "./components/GameBox/GameBox";
import WinnerBox from "./components/WinnerBox/WinnerBox";

function App() {
  const [winner, setWinner] = useState({ win: false, name: "" });

  return (
    <div className={`${winner && "win"} App`}>
      <GameBox nameOne={"Ahmar"} nameTwo={"Nurs"} setWinner={setWinner} />
      {winner.win && <WinnerBox winner={winner.name} />}
    </div>
  );
}

export default App;
