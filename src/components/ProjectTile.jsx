import React from "react";
import ProjectButton from "./ProjectButton";

const ProjectTile = ({ name, image, alt, demoLink, codeLink, docsLink }) => {
  return (
    <div className="transform transition-transform hover:scale-105 overflow-hidden shadow-md shadow-[#76ABAE] hover:shadow-lg hover:shadow-[#76ABAE] duration-300 group container rounded-xl flex justify-center items-center h-[200px] bg-cover relative">
      <img className="h-full w-full" src={image} alt={alt} />
      <div className="opacity-0 group-hover:opacity-90 duration-300 bg-[#76ABAE]/70 absolute inset-0 flex flex-col justify-center items-center">
        <span className="text-2xl font-bold tracking-wider text-black text-center">
          {name}
        </span>
        <div className="pt-8 text-center flex justify-between">
          <ProjectButton link={demoLink} label="Demo" />
          <ProjectButton link={codeLink} label="Code" />
          <ProjectButton link={docsLink} label="Docs" />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
