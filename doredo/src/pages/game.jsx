//React imports
import React from "react";
import { useState, useEffect } from "react";

//My imports: config/options
import { 
  nNotes, 
  startNote, 
  score, 
  points, 
  remainingTime } from "../config/config";
import {
   generateColor,
   onClickEvent
 } from "../config/fonctions";

 //Import components
import Notes from "../components/notes/notes";

const Game = () => {
  const [colorNoteIndex, setColorNoteIndex] = useState(startNote);
  const [currentRandomColor, setCurrentRandomColor] = useState("");
  const [currentScore, setCurrentScore] = useState(score);
  const [currentTime, setCurrentTime] = useState(remainingTime);

  return (
    <div className="container-game">
      <Notes
         nButtons={nNotes}
         score={score}
         points={points}
         remainingTime={remainingTime}
         coloredButtonIndex={colorNoteIndex}
         setColoredButtonIndex={setColorNoteIndex}
         currentRandomColor={currentRandomColor}
         setCurrentRandomColor={setCurrentRandomColor}
         currentScore={currentScore}
         setCurrentScore={setCurrentScore}
         currentTime={currentTime}
         setCurrentTime={setCurrentTime}
      />
    </div>
  );
};

export default Game;
