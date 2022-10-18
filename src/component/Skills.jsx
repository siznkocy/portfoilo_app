import React from "react";
import { SkiilsIcons } from "../data/data";

const Skills = () => {
  return (
    <div name="skills" className="dark:text-white min-h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className=" justify-between">
          <h2 className="text-3xl text-teal-600">Skills</h2>
          <p className="dark:text-gray-400 leading-10  text-lg">
            {<span className="text-teal-500 font-semibold mr-1">//</span>}
            {"Technologies and tools I use."}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-center py-8">
          {SkiilsIcons.map((content) => (
            <div
              className="bg-pink-1 mx-auto py-2 min-h-[160px] min-w-[120px] max-w-[300px] shadow-2xl dark:shadow-black rounded-md flex flex-col justify-between hover:scale-110 duration-500"
              key={content.id}
            >
              <img
                className="w-16 mx-auto my-auto"
                src={content.icon}
                alt={content.name}
              />
              <p className="text-center mt-1">{content.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
