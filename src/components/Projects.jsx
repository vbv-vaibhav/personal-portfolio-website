import React from "react";
import { PasswordGen, Currency, BlogWebsite, WalletApp } from "../assets";
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
          <div className="py-5 text-xl flex justify-between">
            <p>These are some of the recent projects I have worked on.</p>
            <a
              href="https://github.com/vbv-vaibhav/mini-projects"
              className="underline text-[#76ABAE] hover:text-white duration-300"
              target="_blank"
            >
              Mini Projects
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectTile
            image={BlogWebsite}
            name="Blogging Website"
            alt="Blogging Website Project Thumbnail"
            demoLink="https://blogging-website-zeta.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/blogging-website"
            docsLink="https://bumpy-nova-203.notion.site/End-to-end-Blog-Website-79e8f9cdf2d64a33bc667125646e6e03?pvs=4"
          />

          <ProjectTile
            image={WalletApp}
            name="Wallet App"
            alt="Wallet App Project Thumbnail"
            demoLink="https://wallet-app-tan.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/wallet-app-fullstack"
            docsLink="https://bumpy-nova-203.notion.site/End-to-end-Wallet-App-dee2f53cbd0e498e9aa5358af0fa98e2?pvs=4"
          />

          <ProjectTile
            image={Currency}
            name="Forex Simulator"
            alt="Forex Simulator Project Thumbnail"
            demoLink="https://currency-converter-three-lovat.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/currency-converter"
            docsLink="https://bumpy-nova-203.notion.site/Currency-Converter-2f32611a3e7340929cb4aea71cfe47e9?pvs=4"
          />
          <ProjectTile
            image={PasswordGen}
            name="Password Generator"
            alt="Password Generator Project Thumbnail"
            demoLink="https://password-generator-chi-weld.vercel.app/"
            codeLink="https://github.com/vbv-vaibhav/password-generator"
            docsLink="https://bumpy-nova-203.notion.site/Password-Generator-81465bb9c76e4e128931c6d372f97995?pvs=4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
