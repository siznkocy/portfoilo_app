import React from "react";

const About = () => {
  return (
    <div name="about" className="dark:text-white w-full h-screen ">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="sm:text-right pb-8 pl-4">
            <h2 className="text-3xl text-teal-600">About</h2>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right">
            <p className="text-2xl ">
              Hi. I'm Aubrey, nice to meet you. Get to know me!.
            </p>
          </div>
          <div>
            <p className="text-xl dark:text-gray-400">
              I'm a passionate website software developer. I specialize in creating state
              of the art User Interface (UI) software application. Experience on UX/UI designs and software development as on specifications. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
