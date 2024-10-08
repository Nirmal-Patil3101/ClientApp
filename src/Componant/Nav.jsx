import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import "../CSS/Nav.css";
import logo from '../assets/img/foodlogo.png'
const Nav = () => {
  return (
    <div className="navconter">
      <img className="imglogo" src={logo} alt="" />
      <Link to={"/"}>
        <FaHome />
        Home
      </Link>
      <Link to={"/about"}>
        <FcAbout />
        About
      </Link>
      <Link to={"/card"}>
        <FaCartArrowDown />
        Cart
      </Link>
      <Link to={"/dish"}>
        <MdRestaurantMenu />
        Dish
      </Link>
      <Link to={"/login"}>
        <IoMdLogIn />
        Login
      </Link>
      <Link to={"/order"}>
        <BiSolidDish />
        Order
      </Link>
    </div>
  );
};

export default Nav;
