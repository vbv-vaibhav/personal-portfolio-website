import React from "react";
import {
  AWS,
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
  Git,
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
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto" src={Javascript} alt="JS Logo" />
            <p className="my-3">Javascript</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto" src={Typescript} alt="JS Logo" />
            <p className="my-3">Typescript</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-11 mx-auto" src={HTML} alt="JS Logo" />
            <p className="my-3">HTML</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[64px] mx-auto" src={CSS} alt="JS Logo" />
            <p className="my-3">CSS</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto" src={Tailwind} alt="JS Logo" />
            <p className="my-3">Tailwind</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[96px] mx-auto" src={Mongo} alt="JS Logo" />
            <p className="my-3">Mongo DB</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-14 mx-auto" src={Postgres} alt="JS Logo" />
            <p className="my-3">PostgreSQL</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-14 mx-auto" src={Express} alt="JS Logo" />
            <p className="my-3">Express.js</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto" src={Reactjs} alt="JS Logo" />
            <p className="my-3">React.js</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[70px] mx-auto" src={Node} alt="JS Logo" />
            <p className="my-3">Node.js</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[90px] mx-auto" src={Nextjs} alt="JS Logo" />
            <p className="my-3">Next.js</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-[70px] mx-auto" src={AWS} alt="JS Logo" />
            <p className="my-3">AWS</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-12 mx-auto" src={Python} alt="JS Logo" />
            <p className="my-3">Python</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-16 mx-auto" src={CPP} alt="JS Logo" />
            <p className="my-3">C++</p>
          </div>
          <div className="shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
            <img className="w-12 mx-auto" src={Git} alt="JS Logo" />
            <p className="my-3">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
