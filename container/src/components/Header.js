import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-between px-6 py-5 border-b border-b-gray-400">
      <NavLink to="/" className="text-xl font-bold">
        App
      </NavLink>
      <NavLink className="border rounded border-indigo-800 text-lg text-indigo-800 py-2 px-3 hover:border-indigo-900 hover:text-indigo-900 hover:bg-indigo-50 uppercase shadow-sm">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
