import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Portrait } from "../assets";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#222831]">
      <div className="max-w-[1000px] mx-auto pt-16 px-8 flex flex-col justify-center h-full">
        <p className="text-white text-sm">Hey there! My name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#76ABAE]">
          Vaibhav Bansal
        </h1>
        <div className="text-4xl sm:text-7xl font-bold text-gray-300 hover:text-white duration-300">
          <TypeAnimation
            sequence={[
              "I am a Backend Developer",
              1500,
              "I am a Frontend Developer",
              1500,
              "I am a Researcher",
              1500,
              "I am a Techie",
              1500,
              "I am an Engineer",
              1500,
              "I am a Dog Lover",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
          />
        </div>
        <p className="text-gray-300 py-4 max-w-[1000px] text-xl">
          I'm a seasoned full-stack developer with a fervent love for coding and
          technology. I thrive on collaborative projects, delivering top-notch
          results with my expertise in back-end development and front-end
          design. Let's collaborate and harness the power of technology to bring
          your visions to life. Open for hire!
        </p>
        <img
          src={Portrait}
          alt="Self Portrait"
          className="w-72 h-72 mt-4 mx-auto rounded-full object-cover shadow-md shadow-[#76ABAE] hover:shadow-lg hover:shadow-[#76ABAE] hover:scale-105 duration-500"
        />
      </div>
    </div>
  );
};

export default Home;
