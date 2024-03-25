import React from "react";

const ProjectButton = ({ link, label }) => {
  return (
    <a href={link} target="_blank">
      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#31363F] hover:bg-[#181B1F] text-white font-bold text-lg">
        {label}
      </button>
    </a>
  );
};

export default ProjectButton;
