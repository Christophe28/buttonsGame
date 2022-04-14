import React from "react";
import { useState, useEffect } from "react";
import { generateColor } from "../../config/fonctions";

//=====================================Config=====================================//
const nButtons = 100;
const startButton = Math.floor(Math.random()*nButtons);
const score = 20;
const points = 1;
const remainingTime = 30;

const Notes = () => {
  const [coloredButtonIndex, setColoredButtonIndex] = useState(startButton);
  const [currentRandomColor, setCurrentRandomColor] = useState("");
  const [currentScore, setCurrentScore] = useState(score);
  const [currentTime, setCurrentTime] = useState(remainingTime);

  //=====================================Logic=====================================//
  useEffect(() => {
    let chrono = null;
    chrono = setInterval(() => {
      setCurrentTime((currentTime) => currentTime === 0 ? clearInterval(chrono) : currentTime - 1);
    }, 1000);
  }, []); 

  useEffect(() => {
    if(currentTime === 0) {
      alert("vous avez perdu, il vous reste " + currentScore + " boutton ")
    }
    if(currentScore === 0) {
      alert("Félicitation vous avez cliqué sur tous les boutons dans le temps impartit, il restait encore " + currentTime + " secondes");
      setCurrentScore(score);
    }
  }, [currentTime, currentScore]);

  useEffect(() => {
    generateColor(setCurrentRandomColor);
  }, [coloredButtonIndex]);

  const onClickEvent = (isColoredButton) => {
    if(isColoredButton) {
      setColoredButtonIndex(Math.floor(Math.random()*nButtons));
      setCurrentScore(currentScore - points);
    }
  }
  return (
    <div className="container-notes">
      <p>Il vous reste <strong>{currentScore}</strong> boutons à clicker... click click click</p>
      <p>Chrono: {currentTime}</p>
      {
        [...Array(nButtons)].map((value, index) => {
          const currentButtonStyle = {backgroundColor: ""}
          if(coloredButtonIndex === index) {
            currentButtonStyle["backgroundColor"] = "#" + currentRandomColor;
          }
          return(
            <input 
              type="button"
              key={index}
              style={currentButtonStyle}
              onClick={() => onClickEvent(coloredButtonIndex === index)} 
            />
          )
        })
      }
    </div>
  );
};

export default Notes;
