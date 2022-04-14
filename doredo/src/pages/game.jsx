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
   onClickEvent } from "../config/fonctions";

 //Import components
import Notes from "../components/notes/notes";

const Game = () => {
  
  const [colorNoteIndex, setColorNoteIndex] = useState(startNote);
  const [currentRandomColor, setCurrentRandomColor] = useState("");
  const [currentScore, setCurrentScore] = useState(score);
  const [currentTime, setCurrentTime] = useState(remainingTime);

  useEffect(() => {
    //Peut être déclarer chrono en dehors du scope pour l'arrêter aussi quand le joueur remplis les conditions de victoire. Cependant j'envisage de faire cliquer un nombre de bouton déterminé puis comparer le temps.
    let chrono = null;
    chrono = setInterval(() => {
      setCurrentTime((currentTime) => currentTime === 0 ? clearInterval(chrono) : currentTime - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if(currentTime === 0) {
      alert("Vous avez perdu, il vous reste " + currentScore + " bouttons");
    }
    if(currentScore === 0) {
      alert("Félicitation vous avez cliqué sur tous les boutons dans le temps impartit, il restait encore " + currentTime + " secondes");
      setCurrentScore(score);
      // clearInterval(chrono);
    }
  }, [currentTime, currentScore]);

  useEffect(() => {
    generateColor(setCurrentRandomColor);
  }, [colorNoteIndex])

  return (
    <div className="container-game">
      <p>Il vous reste <strong>{currentScore}</strong> boutons à cliquer... click click click</p>
      <p>Chrono: {currentTime}</p>
      <Notes
         nButtons={nNotes}
         coloredButtonIndex={colorNoteIndex}
         currentRandomColor={currentRandomColor}
         onClick={(index) => onClickEvent(colorNoteIndex === index, setColorNoteIndex, nNotes, setCurrentScore, currentScore, points)}
      />
    </div>
  );
};

export default Game;
