import React, { useRef, useState } from "react";
import { Amazing1, Amazing2, Amazing3 } from "../constant/svgs";
import hotelImage from "../assets/images/HeroImage.png";
import customVideo from "../assets/videos/HeroVideo.mp4";
import Slide1 from "../assets/images/slide1.png";
import Slide2 from "../assets/images/slide2.png";
import Slide3 from "../assets/images/slide3.png";
import Slide4 from "../assets/images/slide4.png";
import SelectOption from "../constant/SelectOption";

const HeroSection = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const [isMuted1, setIsMuted1] = useState(false);
  const [isMuted2, setIsMuted2] = useState(false);

  const toggleVideoPlay1 = () => {
    if (videoRef1.current) {
      if (isPlaying1) {
        videoRef1.current.pause();
        setIsPlaying1(false);
      } else {
        videoRef1.current.play();
        setIsPlaying1(true);
      }
    }
  };

  const toggleVideoPlay2 = () => {
    if (videoRef2.current) {
      if (isPlaying2) {
        videoRef2.current.pause();
        setIsPlaying2(false);
      } else {
        videoRef2.current.play();
        setIsPlaying2(true);
      }
    }
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSelect = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  const categories = [
    { id: 1, name: "Dining", image: Slide1 },
    { id: 2, name: "Salon/Spa", image: Slide2 },
    { id: 3, name: "Entertainment", image: Slide3 },
    { id: 4, name: "Cleaning", image: Slide4 },
    { id: 5, name: "Cleaning", image: Slide4 },
    { id: 6, name: "Cleaning", image: Slide4 },
    { id: 6, name: "Cleaning", image: Slide4 },
  ];

  const items = [
    {
      id: 1,
      title: "Amazing Last Minute Discounts",
      description:
        "Get amazing last-minute discounts on your favorite categories: food, beauty, getaways & more.",
      icon: Amazing1,
    },
    {
      id: 2,
      title: "Save",
      description: "Save money with our deals & offers.",
      icon: Amazing2,
    },
    {
      id: 3,
      title: "Secure Payments",
      description:
        "The secure payment methods throughout the checkout process to keep your data secure & safe.",
      icon: Amazing3,
    },
  ];

  return (
    <>
      <div className="bg-[#F9F9F9]">
        <div className="relative hidden lg:block">
          <div className="relative z-0 flex">
            <div className="w-2/3">
              <div className="grid grid-cols-6 gap-4">
                <div className="lg:col-span-6 flex flex-col justify-center space-y-8 p-0 lg:p-8 bg-[#F0FFF8]">
                  <div className="ms-24 pt-20">
                    <h1 className="text-4xl lg:text-6xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                      Get The Best
                      <span className="text-green-600 pb-2 inline-block relative">
                        &nbsp; Deals
                        <svg
                          className="absolute left-4 bottom-0"
                          width="163"
                          height="8"
                          viewBox="0 0 163 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.85352C53.1007 2.41881 105.241 2.07976 157.348 2.07976C157.494 2.07976 162.022 2.13386 162 2.14261C91.7042 5.08881 78.0986 5.38293 31.6127 6.85352C31.6127 6.85352 111.122 6.39607 146.127 6.26528"
                            stroke="#219653"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <br />
                      Near By You!
                    </h1>
                    <p className="text-lg text-gray-700 pt-4 pb-8 leading-relaxed">
                      Explore nearby deals on the map and buy deals to <br />
                      enjoy quality food with your family.
                    </p>
                    <button className="bg-[#013D29] text-white px-12 py-3 rounded-full text-lg cursor-pointer hover:bg-green-400">
                      Explore
                    </button>
                  </div>
                  <div
                    className="mt-6 flex justify-end"
                    style={{ marginTop: "-32%", marginRight: "-13%" }}
                  >
                    <img
                      src={hotelImage}
                      alt="Hotel Illustration"
                      className="w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="grid grid-cols-6 gap-4">
                <div className="lg:col-span-6 relative flex justify-center items-center">
                  <div className="relative overflow-hidden w-full">
                    <video
                      ref={videoRef1}
                      className="w-full h-[550px] object-cover"
                      loop={false}
                      muted={isMuted1}
                    >
                      <source src={customVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div
                      onClick={toggleVideoPlay1}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        {isPlaying1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 9v6m4-6v6"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.607v4.786a1 1 0 001.555.832l4.197-2.42a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative z-10 bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto"
            style={{ marginTop: "-6%", position: "relative" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <SelectOption
                options={["Dining", "Shopping", "Travel"]}
                defaultOption="Dining"
                isOpen={openDropdownIndex === 0}
                onToggle={() => handleDropdownToggle(0)}
                onSelect={handleSelect}
              />
              <SelectOption
                options={["Select All", "Option 1", "Option 2", "Option 3"]}
                defaultOption="Select All"
                isOpen={openDropdownIndex === 1}
                onToggle={() => handleDropdownToggle(1)}
                onSelect={handleSelect}
              />
              <SelectOption
                options={["Select Sub Category", "Sub 1", "Sub 2", "Sub 3"]}
                defaultOption="Select All"
                isOpen={openDropdownIndex === 2}
                onToggle={() => handleDropdownToggle(2)}
                onSelect={handleSelect}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="w-64">
                <SelectOption
                  options={["Lahore", "Karachi", "Islamabad"]}
                  defaultOption="Lahore"
                  isOpen={openDropdownIndex === 3}
                  onToggle={() => handleDropdownToggle(3)}
                  onSelect={handleSelect}
                />
              </div>
              <div className="w-64">
                <SelectOption
                  options={["Destination", "North", "South"]}
                  defaultOption="Destination"
                  isOpen={openDropdownIndex === 4}
                  onToggle={() => handleDropdownToggle(4)}
                  onSelect={handleSelect}
                />
              </div>

              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="w-full pl-10 pr-4 py-[8px] placeholder:text-[#000000] border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute left-3 top-[50%] transform -translate-y-1/2 text-[#000000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    color="#000000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m2.1-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-44">
                <button className="bg-[#013D29] text-white py-[7px] px-6 w-full rounded-full text-lg shadow-lg hover:bg-green-700 transition duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 flex-col lg:flex-row block lg:hidden">
          <div className="w-full lg:w-2/3 p-4 lg:p-8 bg-[#F0FFF8]">
            <div className="space-y-8">
              <h1
                className="text-4xl font-extrabold leading-tight text-gray-900 mt-6"
                style={{ lineHeight: "45px" }}
              >
                Get The Best
                <span className="text-green-600 pb-2 inline-block relative pe-4">
                  Deals
                  <svg
                    className="absolute left-0 bottom-0"
                    width="100"
                    height="8"
                    viewBox="0 0 163 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.85352C53.1007 2.41881 105.241 2.07976 157.348 2.07976C157.494 2.07976 162.022 2.13386 162 2.14261C91.7042 5.08881 78.0986 5.38293 31.6127 6.85352C31.6127 6.85352 111.122 6.39607 146.127 6.26528"
                      stroke="#219653"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Near By You!
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Explore nearby deals on the map and buy deals to enjoy quality
                food with your family.
              </p>
              <button className="bg-[#013D29] text-white px-8 py-3 rounded-full text-base md:text-lg shadow-lg hover:bg-green-700 transition duration-300">
                Explore
              </button>

              <div
                className="mt-6 flex justify-end"
                style={{ marginTop: "-40%" }}
              >
                <img
                  src={hotelImage}
                  alt="Hotel Illustration"
                  className="w-[200px]"
                />
              </div>
            </div>
            <div className="mt-6 hidden lg:flex justify-end">
              <img
                src={hotelImage}
                alt="Hotel Illustration"
                className="w-full max-w-xs"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative overflow-hidden w-full max-w-md">
              <video
                ref={videoRef2}
                className="w-full h-[350px] object-cover"
                muted={isMuted2}
                loop={false}
              >
                <source src={customVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                onClick={toggleVideoPlay2}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  {isPlaying2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 9v6m4-6v6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.607v4.786a1 1 0 001.555.832l4.197-2.42a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative z-10 bg-white p-3 m-4 rounded-lg shadow-md max-w-7xl"
            style={{ marginTop: "-20%", position: "relative" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <select
                className="w-full px-4 py-3 border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  backgroundSize: "1rem",
                }}
                defaultValue="Dining"
              >
                <option value="Dining">Dining</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
              </select>

              <select
                className="w-full px-4 py-3 border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  backgroundSize: "1rem",
                }}
                defaultValue="Select All"
              >
                <option value="Select All">Select All</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <select
                className="w-full px-4 py-3 border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  backgroundSize: "1rem",
                }}
                defaultValue="Select Sub Category"
              >
                <option value="Select Sub Category">Select Sub Category</option>
                <option value="Sub 1">Sub 1</option>
                <option value="Sub 2">Sub 2</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select
                className="w-full px-4 py-3 border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  backgroundSize: "1rem",
                }}
                defaultValue="Lahore"
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
              </select>

              <select
                className="w-full px-4 py-3 border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  backgroundSize: "1rem",
                }}
                defaultValue="Destination"
              >
                <option value="Destination">Destination</option>
                <option value="North">North</option>
                <option value="South">South</option>
              </select>

              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="w-full pl-10 pr-4 py-3 placeholder:text-dark border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m2.1-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                    />
                  </svg>
                </div>
              </div>

              <button className="bg-[#013D29] text-white px-12 py-3 rounded-full text-lg shadow-lg hover:bg-green-700 transition duration-300 self-start">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 hidden lg:block">
          <div className="max-w-8xl mt-10 mx-auto flex justify-between items-center px-[130px] overflow-x-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center space-y-4"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-28 h-28 object-contain"
                />
                <p className="text-[#303632] text-md">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ps-32 pe-32 mt-6">
          <hr className="border-t-[1px] border-[#BED8CB]" />
        </div>

        <div className="pt-6 pb-12 hidden lg:block">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 border-[#BED8CB]">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center space-x-4 pb-6 ${
                  index !== items.length - 1 && "md:border-r border-[#BED8CB]"
                } border-gray-200 px-4`}
              >
                <div className="flex-shrink-0">{item.icon}</div>

                <div>
                  <h3 className="text-xl w-64 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 w-64 text-md mt-2 leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 pb-12 block lg:hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center space-x-4 border-b pb-6 border-gray-200 px-4`}
              >
                <div className="flex-shrink-0">{item.icon}</div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
