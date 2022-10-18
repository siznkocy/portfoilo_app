import React from "react";

const NavBar = () => {
  // todo: position stick to the top when moving downwards/

  return (
    <nav className="sticky top-0 shadow-sm bg-white">
      <ul className="flex justify-around mx-auto md:max-w-[700px] py-5 transition ease-out delay-150 duration-500 dark:text-white">
        <li className="hover:scale-110 border-b-2 border-teal-500">Home</li>
        <li className="hover:scale-110">About</li>
        <li className="hover:scale-110">Work</li>
        <li className="hover:scale-110">Skills</li>
        <li className="hover:scale-110">Contacts</li>
      </ul>
    </nav>
  );
};

export default NavBar;
