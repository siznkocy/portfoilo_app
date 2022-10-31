import React from "react";
import { projects } from "../data/data";

// todo: fix the background hover color of the card

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 fjustify-between">
          <h2 className="text-3xl text-teal-600">Work</h2>
          <p className="dark:text-gray-400 text-lg">
            {<span className="text-teal-500 font-semibold">//</span>}
            {` Check some of my recent work (Click Card)`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Card */}
          {projects.map((project) => (
            // key={project.id}
            <a
              className="w-full p-4 overflow-hidden rounded-sm shadow-2xl dark:shadow-black"
              rel="noopener noreferrer"
              target="_blank"
              href={project.link}
              key={project.id}
            >
              <div className="flex relative">
                <img
                  src={project.image}
                  alt="gallery"
                  className="absolute inset-0 w-full h-72 md:h-56 object-cover object-center"
                />
                <div className="px-8 py-10 relative z-10 w-full h-72 md:h-56 border-4 border-gray-800 bg-gray-900 md:opacity-0 md:hover:opacity-100 opacity-70">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-slate-300">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* <div
key={project.id}
className="shadow-lg group bg-white rounded-sm flex justify-center items-center mx-auto content-div w-full"
style={{ backgroundImage: `url(${project.image})` }}
> */
}
{
  /* Hover effect */
}
{
  /* <div className="opacity-0 group-hover:opacity-100">
  <span className="text-2xl font-bold text-white tracking-wider min-w-[400px]">
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
</div> */
}
