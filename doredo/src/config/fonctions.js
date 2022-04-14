export const generateColor = (setResult) => {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  setResult(randomColor);
};

export const onClickEvent = (isColoredButton, setColoredButtonIndex, nButtons, setCurrentScore, currentScore, points) => {
  if(isColoredButton) {
    setColoredButtonIndex(Math.floor(Math.random()*nButtons));
    setCurrentScore(currentScore - points);
  }
}