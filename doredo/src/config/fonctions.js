export const generateColor = (setResult) => {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  setResult(randomColor);
};
