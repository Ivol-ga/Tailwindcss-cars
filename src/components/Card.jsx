import React from "react";
import Button from "./Button";

function Card({ name, description, picture, openModal, closeModal }) {
  return (
    <div className="card container mx-auto border border-gray-400  rounded-md mb-2.5 p-8  shadow-gray-400 hover:shadow-[15px_15px_70px_0_rgb(0,0,0,0.16)]">
      <div className="card__name text-lg text-center mb-1.5">{name}</div>
      <div className="card__image">
        <img
          src={picture}
          alt={description}
          className="rounded-md cursor-pointer mb-2.5"
        />
      </div>
      <div className="card__desc">
        <p className="card__about mb-2.5">{description}</p>
        <div className="flex justify-end">
          <Button
            isFilled={true}
            openModal={openModal}
            closeModal={closeModal}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
