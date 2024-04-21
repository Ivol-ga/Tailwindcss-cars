import React from "react";
import heart from "../../assets/icons/Heart.svg";
import cart from "../../assets/icons/Cart.svg";
// import { Logo } from "../../Logo";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";

function Header() {
    return (
        <div className={"header container mx-auto box-border mb-2.5"}>
      <div className="container header__menu flex flex-row px-1.5 align-middle justify-between">
        <Logo />
        <div className="header__icons flex items-end">
          <Link to="/favourite" className="icon__favourite icon flex mr-1.5">
            <span className="icon__count text-xm">0</span>
            <img src={heart} alt="favourite" className="w-5"/>
          </Link>
          <Link to="/cart" className="icon__cart icon flex">
            <span className="icon__count text-xm">0</span>
            <img src={cart} alt="cart" className="w-5"/>
          </Link>
        </div>
      </div>
    </div>
    );
  }
  
  export default Header;