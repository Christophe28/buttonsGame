export const generateColor = (setResult) => {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  setResult(randomColor);
};

export const onClickEvent = (exist, setStateA, n, setStateB, currentStateB, x) => {
  if(exist) {
    setStateA(Math.floor(Math.random()*n));
    setStateB(currentStateB - x);
  }
}