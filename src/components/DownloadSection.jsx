import React from "react";
import CountUp from "react-countup";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import mobileImg from "../assets/images/mobile.png";

const DownloadSection = () => {
  const statsData = [
    { value: 788400, label: "Active Users" },
    { value: 6000, label: "Retailers" },
    { value: 3000000, label: "Active Users" },
    { value: 2200000, label: "Downloads" },
  ];
  return (
    <>
      <div className="my-16 flex justify-center">
        <div className="px-4 lg:px-0">
          <div className="rounded-lg max-w-7xl w-full bg-green-100 border border-green-300 p-4 lg:p-6">
            <div className="flex flex-col bg-green-100 sm:flex-col lg:flex-row items-center lg:items-center space-y-8 lg:space-y-0">
              <div className="flex-1 flex justify-center items-center">
                <img src={mobileImg} alt="Phone" className="bg-transparent" />
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl lg:text-5xl font-semibold text-black">
                  Download Our App to <br className="block lg:hidden" /> Get
                  Amazing to <br className="block lg:hidden" />
                  <span className="text-green-600 pb-2 inline-block relative">
                    Deals
                    <svg
                      className="absolute left-0 bottom-0"
                      width="123"
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
                </h3>

                <p className="text-gray-900">
                  Get new deals every day. Top deals have the best offers and
                  share <br />
                  them with you. To avail of offers, find our app in the play
                  store.
                </p>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 mx-6 lg:mx-0">
                  <button className="flex items-center bg-black text-white py-2 px-4 rounded-md w-52">
                    <FaGooglePlay className="text-white text-3xl mr-2" />
                    <div className="text-[10px] text-start leading-[7px]">
                      Android app on <br />
                      <span className="text-2xl">Google Play</span>
                    </div>
                  </button>
                  <button className="flex items-center bg-black text-white py-2 px-4 rounded-md w-52">
                    <FaApple className="text-white text-4xl mr-2" />
                    <div className="text-[13px] text-start leading-[8px]">
                      Download on the <br />
                      <span className="text-2xl">App Store</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 my-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div className="text-center" key={index}>
                <h4 className="text-2xl text-[#000000]">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={5}
                    separator=","
                    easingFn={(t, b, c, d) => c * (t / d) + b}
                  />
                  <span>+</span>
                </h4>
                <p className="text-gray-900">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadSection;
