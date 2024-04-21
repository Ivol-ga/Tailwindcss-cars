import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/ic-notfound.svg";

function NotFound() {
  return (
    <div className={"notFound grid justify-items-center px-1.5 align-center "}>
      <img
        src={notFound}
        className={"image max-w-40 mb-2.5"}
        alt=""
        aria-hidden="true"
      />
      <h2 className={"notFound__title"}>Страница не найдена</h2>
      <Link to={"/"} className="btn">
        На главную
      </Link>
    </div>
  );
}

export default NotFound;
