import React from "react";
import jsonData from "../data.json";
import Card from "./Card";

function CardList({handleClickInfo,openModal,closeModal}) {
    return (
      <div className="cards columns-1 md:columns-2 lg:columns-3 px-1.5 container mx-auto  box-border mb-2.5 flex-1">
       {jsonData.map((dataItem) => {
        return <Card key={dataItem.id} {...dataItem} handleClickInfo={handleClickInfo} openModal={openModal} closeModal={closeModal} />;
      })}
      </div>
    );
  }
  
  export default CardList;