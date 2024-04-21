import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" className="w-28"/>   
    </Link>
  );
}
export { Logo };