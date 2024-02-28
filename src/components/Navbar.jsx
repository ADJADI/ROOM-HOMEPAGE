import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="flex h-28 items-center p-5">
        <div className="md:hidden">
          <button onClick={toggleNav}>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
                fill="#FFF"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-full pr-5 md:w-auto md:gap-10 md:p-10">
          <div className="flex justify-center w-full items-center md:justify-start">
            <h1 className="text-white font-semibold text-xl">room</h1>
          </div>
          <ul className="gap-5 items-center pr-5 hidden md:flex md:text-white">
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/">home</Link>
            </li>
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/shop">shop</Link>
            </li>
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/about">about</Link>
            </li>
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {!isOpen && (
        <div className="flex justify-between items-center h-28 bg-white top-0 pl-5 font-semibold absolute w-full sm:p-8 md:hidden ">
          <button onClick={toggleNav} className="">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                fill="#000"
                opacity=".201"
              />
            </svg>
          </button>

          <ul className="flex gap-5 items-center pr-5 text-sm ">
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/">home</Link>
            </li>
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/shop">shop</Link>
            </li>
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/about">about</Link>
            </li>
            <li className="hover:flex flex-col-reverse items-center">
              <span className="border-b-2 w-5  "></span>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
