import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "../CSS/Nav.css";
import logo from '../assets/img/foodlogo.png';
import { useSelector } from "react-redux";

const Nav = () => {
  //get cartItems from redux state
  const cartItems = useSelector((state) => state.cart.cartItems);

    // Calculate total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.Qty, 0);

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
      <Link to={"/cart"}>
        <FaCartArrowDown />
        Cart <span className="cart-count">{totalItems}</span>
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
      <Link to={"/profile"}>
        <CgProfile/>
        Profile
      </Link>
    </div>
  );
};

export default Nav;
