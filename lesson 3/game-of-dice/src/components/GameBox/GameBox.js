import "./GameBox.css";
import Button from "../Button/Button";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useState } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";

export default function GameBox({ nameOne, nameTwo, setWinner }) {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [currentPointsOne, setCurrentPointsOne] = useState(0);
  const [currentPointsTwo, setCurrentPointsTwo] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [randomDice, setRandomDice] = useState(null);
  const diceIcons = [
    <BsFillDice1Fill />,
    <BsFillDice2Fill />,
    <BsFillDice3Fill />,
    <BsFillDice4Fill />,
    <BsFillDice5Fill />,
    <BsFillDice6Fill />,
  ];

  return (
    <div className="main-game">
      <PlayerCard
        name={nameOne}
        isCurrent={currentPlayer}
        score={scoreOne}
        currentPoints={currentPointsOne}
      />
      <div className="buttons-div">
        <Button
          value={"🐷 NEW GAME"}
          onClick={() => {
            setScoreOne(0);
            setScoreTwo(0);
            setCurrentPointsOne(0);
            setCurrentPointsTwo(0);
            setCurrentPlayer(true);
            setRandomDice(null);
            setWinner({ win: false, name: "" });
          }}
        />
        {randomDice && diceIcons[randomDice - 1]}
        <div className="buttons_down">
          <Button
            value={"🎲 ROLL THE DICE"}
            onClick={() => {
              let random = Math.floor(Math.random() * 6 + 1);
              setRandomDice(random);
              if (random === 1) {
                setCurrentPlayer(!currentPlayer);
                setCurrentPointsOne(0);
                setCurrentPointsTwo(0);
              } else if (currentPlayer) {
                setCurrentPointsOne(currentPointsOne + random);
              } else {
                setCurrentPointsTwo(currentPointsTwo + random);
              }
            }}
          />
          <Button
            value={"👌 LEAVE"}
            onClick={() => {
              if (currentPlayer) {
                setScoreOne(currentPointsOne + scoreOne);
                if (currentPointsOne + scoreOne >= 100) {
                  setWinner({ win: true, name: nameOne });
                }
                setCurrentPointsOne(0);
                setCurrentPlayer(false);
              } else {
                setScoreTwo(currentPointsTwo + scoreTwo);
                if (currentPointsTwo + scoreTwo >= 100) {
                  setWinner({ win: true, name: nameTwo });
                }
                setCurrentPointsTwo(0);
                setCurrentPlayer(true);
              }
            }}
          />
        </div>
      </div>
      <PlayerCard
        name={nameTwo}
        isCurrent={!currentPlayer}
        score={scoreTwo}
        currentPoints={currentPointsTwo}
      />
    </div>
  );
}
