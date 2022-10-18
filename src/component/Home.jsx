import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { UserMode } from "../context/ModeContext";

const Home = () => {
  const { toggleMode } = UserMode();

  return (
    <section name="home" className=" min-h-[92vh]">
      <nav className="py-10 flex justify-between sm:flex-row flex-col items-center gap-5">
        <h1 className="text-md font-silksscreenRegular dark:text-white">
          Developed<span className="text-teal-400">by</span>Aubrey
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => toggleMode()}
              className="cursor-pointer text-2xl dark:text-slate-400"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="hpp"
            >
              Resume/CV
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-5">
        <h2 className="text-5xl text-teal-600 font-medium mx-auto">
          Aubrey Nkosi
        </h2>
        <h3 className="text-2xl py-2 dark:text-white">
          Developer and designer
        </h3>
        <p className="text-md py-3 leading-8 text-gray-800 md:text-xl md:max-w-xl mx-auto dark:text-gray-500">
          Freelancer providing services for programming and design content
          needs. Join me down below and get to know me a bit better.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-14 text-gray-600 pb-10 dark:text-gray-200">
        <ul className="flex gap-14">
          <li>
            <a href="https://twitter.com/siznkocie">
              <AiFillTwitterCircle className="cursor-pointer" />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAP6OcGFkT42RGsHvD62YvA%3D%3D">
              <AiFillLinkedin className="cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="https://github.com/siznkocy">
              <AiFillGithub className="cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden  w-56 h-56">
        <img src="/Sizwe_Nkosi_215026177.png" alt="profile" />
      </div>
    </section>
  );
};

export default Home;
