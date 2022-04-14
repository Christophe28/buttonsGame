import React from "react";

const Notes = ({ 
  nButtons,  
  coloredButtonIndex,
  currentRandomColor,
  onClick
}) => {

  return (
    <div className="container-notes">
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
              onClick={() => {
                onClick(index);
              }}
            />
          )
        })
      }
    </div>
  );
};

export default Notes;
