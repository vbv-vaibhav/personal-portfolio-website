import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#222831] flex justify-center items-center p-4 text-gray-300"
    >
      <form
        method="POST"
        action="https://getform.io/f/pbqxgjea"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-[#76ABAE] text-6xl font-bold inline border-b-4 border-[#76ABAE] hover:text-white duration-300">
            Contact Me
          </p>
          <p className="py-5 text-xl">
            Submit the form below or fire an email to- vbvbansal@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#31363F]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#31363F]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#31363F] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 border-[#76ABAE] hover:bg-[#76ABAE] duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
