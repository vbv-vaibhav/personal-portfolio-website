import React from "react";
import {
  Cloudflare,
  CPP,
  CSS,
  Express,
  HTML,
  Javascript,
  Mongo,
  Nextjs,
  Node,
  Postgres,
  Python,
  Reactjs,
  Tailwind,
  Typescript,
  Docker,
} from "../assets";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#222831] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-[#76ABAE] text-6xl font-bold inline border-b-4 border-[#76ABAE] hover:text-white duration-300">
            Skills
          </p>
          <p className="py-5 text-xl">
            The technologies with which I can contribute and collaborate
            include-
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto pt-6" src={Javascript} alt="JS Logo" />
            <p className="my-3">Javascript</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto pt-6" src={Typescript} alt="JS Logo" />
            <p className="my-3">Typescript</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-11 mx-auto pt-6" src={HTML} alt="JS Logo" />
            <p className="my-3">HTML</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[64px] mx-auto pt-6" src={CSS} alt="JS Logo" />
            <p className="my-3">CSS</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto pt-6" src={Tailwind} alt="JS Logo" />
            <p className="my-3">Tailwind</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[96px] mx-auto pt-6" src={Mongo} alt="JS Logo" />
            <p className="my-3">Mongo DB</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-14 mx-auto pt-6" src={Postgres} alt="JS Logo" />
            <p className="my-3">PostgreSQL</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-14 mx-auto pt-6" src={Express} alt="JS Logo" />
            <p className="my-3">Express.js</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto pt-6" src={Reactjs} alt="JS Logo" />
            <p className="my-3">React.js</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[70px] mx-auto pt-6" src={Node} alt="JS Logo" />
            <p className="my-3">Node.js</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[90px] mx-auto pt-6" src={Nextjs} alt="JS Logo" />
            <p className="my-3">Next.js</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img
              className="w-[55px] mx-auto pt-6"
              src={Cloudflare}
              alt="JS Logo"
            />
            <p className="my-3">Cloudflare</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[60px] mx-auto pt-6" src={Docker} alt="JS Logo" />
            <p className="my-4">Docker</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-12 mx-auto pt-6" src={Python} alt="JS Logo" />
            <p className="my-4">Python</p>
          </div>
          <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto pt-6" src={CPP} alt="JS Logo" />
            <p className="my-4">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
