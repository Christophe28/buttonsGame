import React from "react";
import { 
  nNotes, 
  startNote, 
  score, 
  points, 
  remainingTime } from "../config/config";
import Notes from "../components/notes/notes";

console.log(nNotes, startNote, score, points, remainingTime);
const Game = () => {

  return (
    <div className="container-game">
      <Notes
         nButtons={nNotes}
         startButton={startNote}
         score={score}
         points={points}
         remainingTime={remainingTime}
      />
    </div>
  );
};

export default Game;
