import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/images/favicon.svg";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerMenuAnimation = {
    transition: "height 0.5s ease-out, opacity 0.5s ease-out",
    height: isMenuOpen ? "200px" : "0",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <header className="bg-gradient px-16 py-3">
      <nav className="flex items-center justify-between flex-wrap p-6 lg:flex-row">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="text-white no-underline flex items-center" to="/">
            <img src={Logo} height={48} width={48} className="mr-2" />
            <h2>Le Jardin d&#39;Or</h2>
          </Link>
        </div>
        <div className="block lg:hidden mx-auto sm:mx-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-6 py-4 hamburger-menu text-lg"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <svg
              className="fill-current h-8 w-8"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto"
          id="navbarNav"
          style={hamburgerMenuAnimation}
        >
          <div className="text-base lg:flex-grow">
            {" "}
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${
                    currentPage === "/"
                      ? "font-extrabold text-[#FFD700]"
                      : "font-medium text-black"
                  } hover:text-[#FFD700] transition duration-300`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${
                    currentPage === "/menu"
                      ? "font-extrabold text-[#FFD700]"
                      : "font-medium text-black"
                  } hover:text-[#FFD700] transition duration-300`}
                  to="/menu"
                >
                  Menu
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${
                    currentPage === "/about"
                      ? "font-extrabold text-[#FFD700]"
                      : "font-medium text-black"
                  } hover:text-[#FFD700] transition duration-300`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${
                    currentPage === "/contact"
                      ? "font-extrabold text-[#FFD700]"
                      : "font-medium text-black"
                  } hover:text-[#FFD700] transition duration-300`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={`inline-block bg-black font-medium py-2 px-4 no-underline rounded-lg text-base hover:text-[#FFD700] transition duration-300 ${
                    currentPage === "/reserve" ? "text-[#FFD700]" : "text-white"
                  }`}
                  to="/reserve"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
