import React from "react";
import Logo from "../images/Logo.png";
import animation from "../images/animation.png";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";

function OtherPages() {
  return (
    <div>
      <nav className="flex flex-row justify-between px-14 mt-5 ">
        <img src={Logo} alt="winamp logo" />
        <div className="flex flex-row gap-2">
          <TbWorld className="mt-1" size="28px" />
          <div className="text-lg sm:text-xl">en-US</div>
        </div>
      </nav>

      <div>
        <div>Nothing For Now. Enjoy the View </div>
        <img src={animation} alt="animation" className=" w-40" />
      </div>
    </div>
  );
}

export default OtherPages;
