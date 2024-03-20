import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#222831] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-[#76ABAE] text-6xl font-bold inline border-b-4 border-[#76ABAE] hover:text-white duration-300">
              Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              July 2022 - July 2023 (Software Associate at Coral Telecom
              Limited)
            </p>
          </div>
          <div>
            <p className="text-lg">
              Key member of 5G R&D Team. Worked on the software front of 5G
              Standalone core, collaborated with open source project- "Open5GS".
              Integral part in research and development of "Mission Critical
              Services (MCx)" project allocated by the Indian army. Implemented
              RFC 8855 - BFCP in C++.
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full flex justify-center pt-14">
          <a
            className="px-10 hover:text-[#0072b1] hover:scale-110 duration-300"
            href="https://www.linkedin.com/in/vaibhav-notvbv/"
            target="_blank"
          >
            <FaLinkedin size={45} />
          </a>
          <a
            className="px-10 hover:text-[black] hover:scale-110 duration-300"
            href="https://github.com/vbv-vaibhav"
            target="_blank"
          >
            <FaGithub size={45} />
          </a>
          <a
            className="px-10 hover:text-white hover:scale-110 duration-300"
            href="https://twitter.com/vbv_vaibhav"
            target="_blank"
          >
            <FaXTwitter size={45} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
