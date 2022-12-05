import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/Logo/aglet_logo.svg";
import {BsMenuButtonWideFill} from "react-icons/bs";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-black">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link to={"/"}>
              <img className="w-24 h-24" src={myLogo} alt="/"></img>
            </Link>

            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i><BsMenuButtonWideFill/></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-right" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contacts/"}
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
