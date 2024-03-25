import React from "react";

const SkillTile = ({ logo, name, width, alt, pMargin }) => {
  return (
    <div className="rounded-xl shadow-sm shadow-[#76ABAE] hover:scale-110 hover:shadow-md hover:shadow-[#76ABAE] duration-300">
      <img className={`mx-auto pt-6 ${width}`} src={logo} alt={alt} />
      <p className={pMargin}>{name}</p>
    </div>
  );
};

export default SkillTile;
