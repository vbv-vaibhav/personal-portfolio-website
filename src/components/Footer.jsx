import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#222831]">
      <div className="max-w-[1100px] sm:h-[120px] p-4 flex justify-between mx-auto">
        <div className="flex flex-col">
          <a
            href="/"
            className="text-[#76ABAE] mt-6 hover:text-gray-300 duration-300 text-center"
          >
            Vaibhav Bansal
          </a>
          <a
            href="https://github.com/vbv-vaibhav/personal-portfolio-website"
            className="text-[#76ABAE] mt-1 hover:text-gray-300 duration-300 underline"
            target="_blank"
          >
            Code for this portfolio
          </a>
        </div>

        <p className="text-[#76ABAE] mt-6">
          vbvbansal@gmail.com <br />
          New Delhi, India
        </p>
      </div>
    </div>
  );
};

export default Footer;
