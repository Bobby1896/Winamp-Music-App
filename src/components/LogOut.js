import React from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";

function LogOut() {
  return (
    <div className="container">
      <nav className="flex flex-row justify-between px-14 mt-5 ">
        <img src={Logo} alt="winamp logo" />
        <div className="flex flex-row gap-2">
          <TbWorld className="mt-1" size="28px" />
          <div className="text-lg sm:text-xl">en-US</div>
        </div>
      </nav>

      <div className="flex justify-center items-center mt-3">
        <div className=" bg-[#17161A] w-[80%] 2xl:w-[50%] py-5 px-5 rounded-md drop-shadow-lg">
          <div className=" text-white text-3xl font-bold mb-5">Sign In</div>
          <div className=" mb-5 flex flex-col">
            <label
              htmlFor="Login"
              className="text-lg md:text-xl lg:text-2xl mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email"
              alt="email"
              className="h-14 text-black rounded-md"
              required
            />
          </div>
          <div className=" mb-7 flex flex-col ">
            <label
              htmlFor="login"
              className="text-lg md:text-xl lg:text-2xl mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              alt="password"
              className="h-14 text-black rounded-md border-transparent focus:border-transparent"
              required
            />
          </div>

          <div className="bg-[#b7b2b233] text-[#b7b2b233] hover:text-white hover:bg-[#5B585833] text-center h-14 py-3 rounded-md text-2xl font-bold cursor-pointer mb-3">
            <Link to="/">Sign In</Link>
          </div>
          <div className=" cursor-pointer text-lg md:text-xl lg:text-2xl">
            Forgot Password?
          </div>

          <div className="grid grid-cols-12 gap-2 mt-5 mb-3">
            <div className="col-span-5">
              <hr className="border-1 border-white-500 mt-3 " />
            </div>
            <div className="col-span-2 text-center md:text-xl lg:text-2xl">
              OR
            </div>
            <div className="col-span-5">
              <hr className="border-1 border-white-500 mt-3 " />
            </div>
          </div>

          <div className="text-lg md:text-xl lg:text-2xl font-bold text-center hover:underline text-white mt-3 cursor-pointer hover:text-#b7b2b233">
            Create Account
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
