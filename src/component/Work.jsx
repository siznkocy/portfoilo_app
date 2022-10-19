import React from "react";
import { WebApplication } from "../data/data";

// todo: fix the background hover color of the card

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 fjustify-between">
          <h2 className="text-3xl text-teal-600">Work</h2>
          <p className="dark:text-gray-400 text-lg">
            {<span className="text-teal-500 font-semibold">//</span>}
            {` Check some of my recent work`}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {/* Card */}
          {WebApplication.map((project) => (
            <div
              key={project.id}
              className="shadow-lg group rounded-md flex justify-center items-center mx-auto content-div p-4"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Hover effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold tetx-white tracking-wider min-w-[400px]">
                  {project.name}
                </span>
                <div className="pt-8 text-center">
                  <a
                    rel="noopener noreferrer"
                    href={project.demo}
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 bg-white font-semibold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
