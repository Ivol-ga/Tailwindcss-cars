import React from "react";
import Button from "./Button";

function Modal({ active, setActive, closeModal }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={`modal overflow-auto touch-auto fixed h-screen w-screen bg-black/70 top-0 left-0 flex justify-center items-center ${
        active ? "scale-100" : "scale-0"
      }`}
      role={"dialog"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal__content  sm:py-[10px] md:py-[16px] lg:py-[30px] px-[10px] bg-[#F6F4F2]  w-4/5 rounded-xl relative "
      >
        <button
          onClick={closeModal}
          className="absolute text-lg right-0 top-0 font-bold p-3 text-black-500 hover:text-neutral-200"
        >
          X
        </button>
        <div className="columns-1 md:columns-2 ">
          <div className=" sm:mr-[5px] md:mr-[15px] lg:mr-[70px] ">
            <div className="car__info ">
              <div className="car__info_desc max-w-402 bg-white p-[10px] border-gray-400  rounded-[26px] mb-2.5  shadow-[28px_5px_50px_0_rgb(0,0,0,0.16)] ">
                <h2 className="text-lg text-center mb-1.5 font-bold">
                  Kia Presto 2019
                </h2>
                <ul className="grid grid-cols-1 divide-y mb-2.5 text-sm ">
                  <li className="flex justify-between mb-1.5 ">
                    <div className="my-1">Марка</div>
                    <div className="my-1">Kia</div>
                  </li>
                  <li className="flex justify-between mb-1.5 ">
                    <div className="my-1">Модель</div>
                    <div className="my-1">Presto</div>
                  </li>
                  <li className="flex justify-between mb-1.5">
                    <div className="my-1">Пробег</div>
                    <div className="my-1">500км</div>
                  </li>
                  <li className="flex justify-between mb-1.5">
                    <div className="my-1">Год</div>
                    <div className="my-1">2019</div>
                  </li>
                  <li className="flex justify-between mb-1.5">
                    <div className="my-1t">Комиссия парка</div>
                    <div className="my-1">0.1%</div>
                  </li>
                  <li className="flex justify-between mb-1.5">
                    <div className="my-1">Коробка передач</div>
                    <div className="my-1">Автомат</div>
                  </li>
                  <li className="flex justify-between mb-1.5">
                    <div className="my-1">Тип топлива</div>
                    <div className="my-1">Бензин</div>
                  </li>
                  <li className="flex justify-between">
                    <div className="my-1">Название парка</div>
                    <div className="my-1">Predator</div>
                  </li>
                </ul>
              </div>
              <div className="car__info_cost max-w-402 bg-white border-gray-400  rounded-[26px] mb-2.5 p-[10px] shadow-[28px_28px_50px_0_rgb(0,0,0,0.16)] ">
                <h3 className="text-md text-center sm:mb-1.5 md:mb-2.5 lg:mb-6 font-bold text-sm">
                  Выберите стоимость и схему дней
                </h3>
                <select
                  name="cost"
                  id="cost"
                  className="w-full sm:mb-1 md:mb-1.5 lg:mb-2.5 text-sm flex flex-column sm:p-2 md:p-3 lg:p-5 font-bold rounded-[16px] bg-[#F6F4F2]"
                >
                  <option value="1650">1650 ₽ - 7 раб./0 вых.</option>
                  <option value="1250">1250 ₽ - 5 раб./2 вых.</option>
                  <option value="650">650 ₽ - 1 раб./6 вых.</option>
                </select>
                <div className="text-center">
                  <Button isFilled={true}>Забронировать</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="card__image ">
            <img
              src="https://i.postimg.cc/h4mKdvzB/car.png"
              alt="car__photo"
              className="rounded-[26px] mb-2.5 shadow-[28px_28px_50px_0_rgb(0,0,0,0.16)]"
            />
            <div className="contacts bg-white border-gray-400 p-[10px] rounded-[26px] mb-2.5 shadow-[28px_28px_50px_0_rgb(0,0,0,0.16)] text-sm">
              <ul className="grid grid-cols-1 divide-y ">
                <li className="flex justify-between mb-3.5">
                  <div className="left">Адрес парка</div>
                  <div className="right">График работы</div>
                </li>
                <li className="flex justify-between mb-1.5">
                  <a
                    href="https://yandex.ru/maps/-/CCUDeZg5TD"
                    className="text-[#47B1FE] "
                  >
                    Москва ул.Поморская 15с1 127410
                  </a>
                  <div className="text-right">
                    Пн - Пт: 10:00 - 22:00
                    <br />
                    Сб - Вс: выходной
                  </div>
                </li>
                <li className="flex flex-col mb-2.5">
                  <div className="left mb-2.5">Телефон</div>
                  <div className="left mb-1.5">+7(999) 123-45-67</div>
                </li>
                <li className="flex justify-between">
                  <div className="left mb-2.5">О парке</div>
                  <div className="left mb-1.5 cursor-pointer">&#709;</div>
                </li>
              </ul>
              <div className="text-right">
                <Button isFilled={true}>Смотреть похожие</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
