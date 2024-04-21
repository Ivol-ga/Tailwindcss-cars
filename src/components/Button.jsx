import React from "react";

const borderStyles = "border-1 border-yellow-300 rounded-lg hover:transition ease-in-out";
const filledStyles = "text-almost-white bg-yellow rounded-lg font-bold py-2 px-4 mx-0 hover:bg-yellow hover:text-almost-black  rounded-lg";

function Button({
    children = "",
    hasBorder = false,
    isFilled = false,
    openModal,
}) {
    return (
     <button className={`text-medium-gray px-5 py-2 text-sm  ${hasBorder && borderStyles} ${isFilled && filledStyles}`} onClick={()=>openModal(true)}>{children}</button>
    );
  }
  
  export default Button;