import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { UserMode } from "../context/ModeContext";

const NavBar = () => {
  // todo: position stick to the top when moving downwards/
  const { toggleMode } = UserMode();

  return (
    <nav className="sticky top-0 shadow-sm bg-inherit z-20">
      <ul className="flex justify-around mx-auto md:max-w-[700px] py-2 transition ease-out delay-150 duration-500 dark:text-white z-1">
        <li className="hover:scale-110 border-b-2 border-teal-500 cursor-pointer">
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 cursor-pointer">
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 cursor-pointer">
          <Link
            activeClass="active"
            to="skills"
            offset={-100}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 cursor-pointer">
          <Link
            activeClass="active"
            to="work"
            offset={-120}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="hover:scale-110 cursor-pointer">
          <Link
            activeClass="active"
            to="contacts"
            offset={-60}
            smooth={true}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <div className="absolute rounded-full right-2 top-14 bg-inherit p-2 shadow-sm shadow-slate-300 dark:shadow-slate-700">
        <BsFillMoonStarsFill
          onClick={() => toggleMode()}
          className="cursor-pointer text-2xl dark:text-slate-200 mx-auto"
        />
      </div>
    </nav>
  );
};

export default NavBar;
