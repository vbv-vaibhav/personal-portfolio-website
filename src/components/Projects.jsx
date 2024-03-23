import React from "react";
import { PasswordGen, Currency } from "../assets";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#222831] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-[#76ABAE] text-6xl font-bold inline border-b-4 border-[#76ABAE] hover:text-white duration-300">
            Projects
          </p>
          <p className="py-5 text-xl">
            These are some of the recent projects I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="transform transition-transform hover:scale-105 overflow-hidden shadow-md shadow-[#76ABAE] hover:shadow-lg hover:shadow-[#76ABAE] duration-300 group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
            <img src={PasswordGen} alt="Password Generator Project Thumbnail" />
            <div className="opacity-0 group-hover:opacity-90 duration-300 bg-[#76ABAE]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold tracking-wider text-black">
                Password Generator
              </span>
              <div className="pt-8 text-center flex">
                <a
                  href="https://password-generator-chi-weld.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/vbv-vaibhav/password-generator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
                    Docs
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="transform transition-transform hover:scale-105 overflow-hidden shadow-md shadow-[#76ABAE] hover:shadow-lg hover:shadow-[#76ABAE] duration-300 group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
            <img src={Currency} alt="Password Generator Project Thumbnail" />
            <div className="opacity-0 group-hover:opacity-90 duration-300 bg-[#76ABAE]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold tracking-wider text-black">
                Foreign Exchange Simulator
              </span>
              <div className="pt-8 text-center flex justify-between">
                <a
                  href="https://currency-converter-three-lovat.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/vbv-vaibhav/currency-converter"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
                    Docs
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
