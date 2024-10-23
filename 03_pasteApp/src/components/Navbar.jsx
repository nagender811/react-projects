import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex gap-8 justify-between 
    lg:w-[60%] mx-auto "
    >
      <div>
        <img
          className="h-12"
          src="https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=640&q=75"
          alt="logo"
        />
      </div>
      <div className="flex gap-6 mx-2">
        <h1 className="text-2xl text-[#4489F6] font-semibold">
          <NavLink to="/">Home</NavLink>
        </h1>
        <h1 className="text-2xl text-[#4489F6] font-semibold">
          <NavLink to="/pastes">Pastes</NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
