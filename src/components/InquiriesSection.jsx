import React from "react";
import backgroundImage from "../assets/images/Mask group.png";

const InquiriesSection = () => {
  return (
    <>
      <div
        className="bg-[#FCF5DC] py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-10">
          <h1 className="font-semibold text-2xl text-center lg:text-left leading-8">
            For inquiries and more information
          </h1>
          <button className="bg-black text-white hover:bg-white hover:text-black  px-10 py-4 text-base leading-5 rounded-full">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="w-full h-[70vh] hidden lg:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.234015730726!2d-79.38318608453087!3d43.653225279121325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2f6e5d849%3A0x6b86f5a9b9db7c98!2sCN%20Tower%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1682283899671!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default InquiriesSection;
