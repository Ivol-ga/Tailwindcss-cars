import React from "react";
import CardsList from "../CardsList";

function Main({handleClickInfo, openModal, closeModal}) {
    return (
    <div className="flex-auto">
    <CardsList handleClickInfo={handleClickInfo} openModal={openModal} closeModal={closeModal}  />
    </div>
    );
  }
  
  export default Main;