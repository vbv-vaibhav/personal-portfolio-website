import React from "react";
import SkillTile from "./SkillTile";
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
          <SkillTile
            logo={Javascript}
            name="Javascript"
            width="w-16"
            alt="Javascript Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Typescript}
            name="Typescript"
            width="w-16"
            alt="Typescript Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={HTML}
            name="HTML"
            width="w-11"
            alt="HTML Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={CSS}
            name="CSS"
            width="w-[64px]"
            alt="CSS Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Tailwind}
            name="Tailwind"
            width="w-16"
            alt="Tailwind Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Mongo}
            name="MongoDB"
            width="w-[96px]"
            alt="MongoDB Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Postgres}
            name="PostgreSQL"
            width="w-14"
            alt="Postgres Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Express}
            name="Express.js"
            width="w-14"
            alt="Express Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Reactjs}
            name="React.js"
            width="w-16"
            alt="React Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Node}
            name="Node.js"
            width="w-[70px]"
            alt="Node Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Nextjs}
            name="Next.js"
            width="w-[90px]"
            alt="Next Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Cloudflare}
            name="Cloudflare"
            width="w-[55px]"
            alt="Cloudflare Logo"
            pMargin="my-3"
          />
          <SkillTile
            logo={Docker}
            name="Docker"
            width="w-[55px]"
            alt="Docker Logo"
            pMargin="my-4"
          />
          <SkillTile
            logo={Python}
            name="Python"
            width="w-12"
            alt="Python Logo"
            pMargin="my-4"
          />
          <SkillTile
            logo={CPP}
            name="C++"
            width="w-16"
            alt="C++ Logo"
            pMargin="my-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
