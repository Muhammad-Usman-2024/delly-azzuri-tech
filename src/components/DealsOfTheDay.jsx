import React, { useState } from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { heartIcon, percentageIcon } from "../constant/svgs";
import CardData from "../data/CardData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DealsOfTheDay = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [currentLocations, setCurrentLocations] = useState([]);

  const handleHover = (event, moreLocations) => {
    const buttonRect = event.target.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.top + window.scrollY - 10,
      left: buttonRect.left + buttonRect.width / 2,
    });
    setCurrentLocations(moreLocations);
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  const CardComponent = ({ item }) => (
    <div className="px-4 lg:px-0">
      <div className="rounded-3xl overflow-hidden bg-white shadow-md">
        <div className="relative overflow-hidden">
          <img
            src={item.imgage}
            alt="Card"
            className="w-full h-[220px] object-cover"
          />
          <div className="absolute top-4 right-8 bg-white p-2 rounded-full shadow-lg">
            {heartIcon}
          </div>
        </div>

        <div className="py-4 space-y-4">
          <div className="px-4 flex justify-between items-center">
            <div className="flex items-center space-x-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <div className="flex items-center space-x-2 pe-4">
              {percentageIcon}
              <p className="text-black">{item.discount}</p>
            </div>
          </div>

          <div className="px-4">
            <h3 className="text-black text-xl font-bold">{item.title}</h3>
            <div className="relative space-y-2 mt-2">
              <div className="relative group">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span className="text-gray-500">{item.location}</span>
                  <span
                    className="text-green-500 underline ml-2 cursor-pointer"
                    onMouseEnter={(e) => handleHover(e, item.moreLocations)}
                    onMouseLeave={handleMouseLeave}
                  >
                    +{item.moreLocations.length} more
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="ps-4 pe-4">
            <hr className="border-[#EFEFEF]" />
          </div>
          <div className="px-4 flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <img
                src={item.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-black font-semibold">{item.userName}</span>
            </div>
            <button className="bg-[#013D29] hover:bg-green-400  text-white px-6 py-2 rounded-full">
              {item.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <>
      <div className="bg-[#FCF5DC] py-20 hidden lg:block">
        <div className="p-4 lg:p-6 space-y-8 max-w-7xl w-full mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold">
                Deals of
                <span className="text-green-600 pb-3 relative inline-block">
                  &nbsp;the Day
                  <svg
                    className="absolute left-3 bottom-0"
                    width="163"
                    height="8"
                    viewBox="0 0 163 8"
                    fill="none"
                  >
                    <path
                      d="M1 1.85352C53.1007 2.41881 105.241 2.07976 157.348 2.07976C157.494 2.07976 162.022 2.13386 162 2.14261C91.7042 5.08881 78.0986 5.38293 31.6127 6.85352C31.6127 6.85352 111.122 6.39607 146.127 6.26528"
                      stroke="#219653"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-[#000000] mt-2">
                Explore Nearby deals on map and buy deals to enjoy quality food
                with your family.
              </p>
            </div>
            <button className="bg-[#013D29] hover:bg-green-400  text-white px-8 py-2 rounded-full">
              Explore
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {CardData.map((item, index) => (
              <CardComponent item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FCF5DC] py-12 block lg:hidden">
        <div className="p-4 lg:p-6 space-y-4 max-w-7xl w-full mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold">
                Deals of
                <span className="text-green-600 pb-3 relative inline-block">
                  &nbsp;the Day
                  <svg
                    className="absolute left-3 bottom-0"
                    width="103"
                    height="8"
                    viewBox="0 0 163 8"
                    fill="none"
                  >
                    <path
                      d="M1 1.85352C53.1007 2.41881 105.241 2.07976 157.348 2.07976C157.494 2.07976 162.022 2.13386 162 2.14261C91.7042 5.08881 78.0986 5.38293 31.6127 6.85352C31.6127 6.85352 111.122 6.39607 146.127 6.26528"
                      stroke="#219653"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-[#000000]">
                Explore Nearby deals on map and buy deals to enjoy quality food
                with your family.
              </p>
            </div>
          </div>
          <button className="bg-[#013D29] hover:bg-green-400  text-white px-8 py-2 rounded-full">
            Explore
          </button>
        </div>
        <div className="mt-6">
          <Slider {...sliderSettings}>
            {CardData.map((item, index) => (
              <CardComponent item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>

      {showModal && (
        <div
          className="absolute z-50 bg-white rounded-lg shadow-lg border border-green-400"
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div
            className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border border-green-400 rotate-45"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>

          <div className="p-4 w-64">
            <h3 className="text-lg font-bold mb-2">Locations</h3>
            <ul className="space-y-1">
              {currentLocations.map((location, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer items-center space-x-2 text-gray-700 hover:bg-[#E9FBF2] px-2 py-1 rounded-lg"
                >
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DealsOfTheDay;
