import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { Link, animateScroll as scroll, } from "react-scroll";

import Logo from "../assets/logo.png";

const Navbar = () => {
  //menu hooks
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  //let, var, const 

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "w-screen h-[80px] z-10 bg-[#f1b23bea] fixed p-3 px-10 transition duration-300"
          : "w-screen h-[80px] z-10 fixed px-7 lg:px-12 transition duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full">
        <NavLink to='/' className="flex items-center">
          <img className="w-[140px]" src={Logo} alt="Logo" />
        </NavLink>
        <div className="hidden md:flex pr-4 md:pr-2">
          <ul className="hidden md:flex text-white">
            <li className="transition duration-300 hover:text-[#1df0db]">
              <AiOutlineSearch className=" w-10 h-6" />
            </li>
            <li className="transition duration-300 hover:text-[#1df0db] cursor-pointer">
              <Link to='home' smooth={true} offset={0} duration={1500}>Home</Link>
            </li>
            <li className="transition duration-300 hover:text-[#1df0db] cursor-pointer">
              <Link to='about' smooth={true} offset={1} duration={1500}>About</Link>
            </li>
            <li className="transition duration-300 hover:text-[#1df0db] cursor-pointer">
              <Link to='features' smooth={true} offset={50} duration={1500}>Features</Link>
            </li>
          </ul>
          <button className="border-none transition duration-150 bg-transparent hover:bg-transparent hover:text-[#1df0db] text-white mx-6 mr-4">
            <NavLink to="/login">Sign In</NavLink>
          </button>
          <button className="px-8 my-2 h-10">
            <NavLink to="/register">Sign Up</NavLink>
          </button>
        </div>
        <div className="flex flex-row md:hidden">
          <AiOutlineSearch className=" w-10 h-6" />
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <HiMenu className="w-6 h-7" />
            ) : (
              <AiFillCloseCircle className="w-6 h-7" />
            )}
          </div>
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 py-3"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Features</li>
        <div className="flex flex-col my-4">
          <button className="text-black py-3 mb-4">
            <NavLink to="/login">Sign In</NavLink>
          </button>
          <button className="px-8 py-3 text-black hover:bg-[#f1b23bea] hover:text-white duration-300">
            <NavLink to="/register">Sign Up</NavLink>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
