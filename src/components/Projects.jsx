import React from "react";
import { PasswordGen, Currency, BlogWebsite } from "../assets";
import ProjectTile from "./ProjectTile";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectTile
            image={BlogWebsite}
            name="Blogging Website"
            alt="Blogging Website Project Thumbnail"
            demoLink="https://blogging-website-zeta.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/blogging-website"
            docsLink="/"
          />

          <ProjectTile
            image={Currency}
            name="Forex Simulator"
            alt="Forex Simulator Project Thumbnail"
            demoLink="https://currency-converter-three-lovat.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/currency-converter"
            docsLink="/"
          />
          <ProjectTile
            image={PasswordGen}
            name="Password Generator"
            alt="Password Generator Project Thumbnail"
            demoLink="https://password-generator-chi-weld.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/password-generator"
            docsLink="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
