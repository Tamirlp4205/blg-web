import React from "react";
import MetaLogo from "../assets/MetaLogo";
import SearchLogo from "../assets/searchlogo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white  w-[1216px] mx-auto">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <Link to="/">
            <MetaLogo />
          </Link>
        </div>
        <ul className="flex space-x-4 font-bold">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/AllBlog">
            <button>Blog</button>
          </Link>
          <Link to="/ContactUs">
            <button>Contact</button>
          </Link>
        </ul>
        <div className="border rounded-md px-2 py-1 flex items-center bg-slate-100">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent"
          />
          <SearchLogo />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
