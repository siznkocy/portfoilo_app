import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  // todo: position stick to the top when moving downwards/

  return (
    <nav className="sticky top-0 shadow-sm bg-inherit">
      <ul className="flex justify-around mx-auto md:max-w-[700px] py-5 transition ease-out delay-150 duration-500 dark:text-white z-1">
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
    </nav>
  );
};

export default NavBar;
