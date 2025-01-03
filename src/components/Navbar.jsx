import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  profileIcon,
  ShopIcon,
  menuIcon,
  HomeIcon,
  ServicesIcon,
  EntertaimentIcon,
  DinningIcon,
  SalonIcon,
  mobileMenu,
} from "../constant/svgs";
import images from "../constant/images";

const countries = [
  {
    name: "Pakistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  },
  {
    name: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    name: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
  },
];

const Navbar = () => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsCountryDropdownOpen(false);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="bg-white border-b border-[#EDEDED] px-6 hidden lg:block">
        <div className="max-w-8xl mx-auto flex justify-between items-center py-4 px-10">
          <div className="flex items-center gap-6">
            <img
              src={images.DeellyLogo}
              alt="Deelly Logo"
              className="w-32 h-auto"
            />
            <div className="relative w-[160px]">
              <button
                className="flex justify-between items-center border-[1.4px] border-[#219653] rounded-full px-4 py-[7px] bg-white w-full"
                onClick={toggleCountryDropdown}
              >
                <div className="flex items-center gap-2 ps-1">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-6"
                  />
                  <span className="text-[#000000] text-sm truncate">
                    {selectedCountry.name}
                  </span>
                </div>
                <ChevronDown color="#000000" size={15} />
              </button>

              {isCountryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-[#E1E1E1] z-10">
                  <ul className="py-2">
                    {countries.map((country, index) => (
                      <li
                        key={index}
                        onClick={() => handleCountrySelect(country)}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-[#E9FBF2] cursor-pointer"
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-5 h-5"
                        />
                        <span className="truncate text-sm">{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end mx-3">
            <div className="relative w-full max-w-[280px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-[#E4E6ED] rounded-[10px] pl-11 pr-4 text-md py-[9px] text-[#717171] placeholder:text-[#717171] focus:outline-none focus:ring-2 focus:ring-[#219653]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#717171]" />
            </div>
          </div>

          <div className="w-11 h-11 bg-gradient-to-r from-[#5ACD84] to-[#56AEFF]  hover:from-[#56AEFF] hover:to-[#5ACD84] rounded-[10px] flex items-center justify-center">
            {menuIcon}
          </div>

          <div className="flex items-center gap-4 ms-10">
            <div className="relative">
              <div className="w-10 h-10 bg-gray-100 hover:bg-[#E9FBF2] rounded-full flex items-center justify-center">
                {ShopIcon}
              </div>
              <div className="absolute -top-3 -right-4 bg-[#FFBF00] text-[#000000] rounded-full text-[10px] w-8 h-8 flex items-center justify-center font-bold border-[4px] border-white">
                03
              </div>
            </div>

            <div className="relative">
              <button
                className="w-10 h-10 bg-gray-100 hover:bg-[#E9FBF2] rounded-full flex items-center justify-center"
                onClick={toggleProfileDropdown}
              >
                {profileIcon}
              </button>

              <div className="relative">
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg text-sm shadow-lg border border-gray-200 z-50">
                    <ul className="py-2">
                      <li className="flex items-center gap-2 px-4 ps-[18px] py-3 hover:bg-[#E9FBF2] cursor-pointer">
                        {profileIcon}
                        Customer Login
                      </li>

                      <li className="flex items-center gap-2 px-4 py-3 hover:bg-[#E9FBF2] cursor-pointer">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9987 14.9249C16.9987 14.8703 16.9948 14.7446 16.9897 14.3384C16.9858 14.0045 16.9548 13.7035 16.8968 13.4179C16.4502 11.2417 15.2165 9.78164 13.229 9.07826C13.131 9.04398 13.0316 9.01477 12.9322 8.98938C13.9208 7.98002 14.1402 6.88432 14.1427 6.11746C14.1466 4.96463 13.6562 3.83211 12.8303 3.08811C11.23 1.64453 8.80638 1.63691 7.19062 3.06779C6.35952 3.80418 5.86137 4.93797 5.85879 6.10096C5.8575 6.87036 6.07431 7.9724 7.0706 8.99192C7.04608 8.99827 7.02156 9.00462 6.99704 9.01097C4.82507 9.60008 3.16286 11.6531 3.04413 13.894C2.99767 14.7624 2.99767 14.7764 3.00154 15.1459C3.00283 15.2969 3.00541 15.509 3.00541 15.867C3.00541 16.5869 3.74231 18 5.44582 18C7.50423 18 8.73927 18 9.96786 18C11.1965 18 12.4599 18 14.5557 17.9987C16.2386 17.9987 16.9961 16.5844 16.9961 15.5801C16.9974 15.2233 16.9987 15.0887 17 15.0265C17 14.9884 17 14.9546 17 14.9249H16.9987ZM10.8132 13.8686C10.5938 14.059 10.3679 14.2431 10.1305 14.4387L10.0014 14.5453C9.95496 14.5072 9.9085 14.4704 9.86333 14.4323C9.62716 14.2393 9.4039 14.0578 9.19612 13.8724C9.18321 13.8546 9.1716 13.8013 9.17676 13.7772C9.28517 13.1995 9.40002 13.0179 9.52004 12.4212L9.59619 12.0429H10.4054L10.4738 12.3793C10.5951 12.9786 10.7215 13.2173 10.8377 13.828C10.8338 13.8407 10.8222 13.861 10.8145 13.8686H10.8132ZM11.9966 8.01938C11.4688 8.54501 10.7667 8.83703 10.0208 8.84083C10.0156 8.84083 10.0117 8.84083 10.0066 8.84083C9.25548 8.84083 8.54956 8.5539 8.01915 8.03334C7.48487 7.51025 7.19192 6.81449 7.19321 6.07302C7.1945 4.56216 8.43857 3.32299 9.96657 3.31029C9.97431 3.31029 9.98335 3.31029 9.99109 3.31029C10.7396 3.31029 11.4429 3.59215 11.9734 4.10635C12.5076 4.62564 12.8058 5.32013 12.8096 6.06287C12.8135 6.79799 12.5257 7.49375 11.9979 8.01938H11.9966ZM9.74202 10.6932V10.1828H10.2608V10.6932H9.74202ZM8.15853 10.16C8.20499 10.1587 8.25145 10.1574 8.30178 10.1574C8.33533 10.1574 8.37147 10.1574 8.41018 10.1574C8.40115 10.2908 8.39341 10.4228 8.38566 10.5536C8.35856 10.9954 8.33404 11.4131 8.26951 11.8283C8.16111 12.5241 8.00237 12.8478 7.8488 13.5283L7.79847 13.7493C7.69652 14.2 7.8346 14.5339 8.23209 14.8018C8.43857 14.9414 8.67861 15.1103 8.89542 15.3084L9.02835 15.4303C9.94721 16.2809 10.0556 16.2809 10.9603 15.4404L11.1268 15.2868C11.2907 15.1357 11.483 14.991 11.7488 14.817C12.1682 14.544 12.3037 14.2 12.1915 13.701C11.9966 12.8377 11.8379 12.4987 11.7204 11.7483C11.6598 11.3585 11.6378 10.9662 11.6146 10.551C11.6068 10.4228 11.6004 10.2946 11.5914 10.1651C11.9772 10.1308 12.3463 10.1752 12.7386 10.3047C14.2615 10.805 15.2087 11.8981 15.5559 13.5525C15.6424 13.9651 15.6462 14.4133 15.6514 14.845C15.6514 14.9706 15.654 15.0951 15.6566 15.2208V15.2398C15.6669 15.6182 15.5236 15.9749 15.2552 16.2454C14.9868 16.5158 14.6267 16.6656 14.2421 16.6656H5.89493C5.4755 16.6656 5.08189 16.5044 4.78635 16.2098C4.49211 15.9178 4.33337 15.5293 4.33725 15.1192C4.33983 14.9516 4.34241 14.7751 4.34757 14.5821C4.35919 14.172 4.38242 13.6997 4.50502 13.2769C5.02639 11.4868 6.11561 10.4749 7.8346 10.1828C7.93268 10.1663 8.03335 10.1613 8.15595 10.1562L8.15853 10.16Z"
                            fill="black"
                          />
                        </svg>
                        Merchant Login
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="max-w-8xl px-8 mx-auto flex justify-between items-center py-4 overflow-x-auto">
          <div className="flex items-center space-x-28">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">{HomeIcon}</div>
              <span className="text-sm text-gray-800 font-medium hover:text-green-400 tracking-[1.6px] cursor-pointer">
                HOME
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8">{DinningIcon}</div>
              <span className="text-sm text-gray-800 font-medium hover:text-green-400 tracking-[1.6px] cursor-pointer">
                DINNING
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8">{SalonIcon}</div>
              <span className="text-sm text-gray-800 font-medium hover:text-green-400 tracking-[1.6px] cursor-pointer">
                SALON/SPA
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8">{EntertaimentIcon}</div>
              <span className="text-sm text-gray-800 font-medium hover:text-green-400 tracking-[1.6px] cursor-pointer">
                ENTERTAINMENT
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8">{ServicesIcon}</div>
              <span className="text-sm text-gray-800 font-medium hover:text-green-400 tracking-[1.6px] cursor-pointer">
                HOME SERVICES
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:hidden">
          <div className="flex gap-5 items-center">
            <button onClick={toggleMobileMenu}>{mobileMenu}</button>
            <div>
              <img
                src={images.DeellyLogo}
                alt="Deelly Logo"
                className="w-24 h-auto"
              />
            </div>
          </div>

          <div className="relative">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {ShopIcon}
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold border-2 border-white">
              03
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
            <ul className="flex flex-col items-start gap-4 py-4 pl-4">
              <li className="flex flex-col gap-2 cursor-pointer">
                <div
                  className="flex items-center border border-[#219653] rounded-full px-3 py-1 bg-white"
                  onClick={toggleCountryDropdown}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                    alt="Pakistan Flag"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-[#219653] font-medium">Pakistan</span>
                  <svg
                    className="w-4 h-4 ml-2 text-[#219653]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {isCountryDropdownOpen && (
                  <div className="mt-2 bg-white shadow-lg rounded-lg border border-gray-200">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-[#E9FBF2] cursor-pointer">
                        India
                      </li>
                      <li className="px-4 py-2 hover:bg-[#E9FBF2] cursor-pointer">
                        USA
                      </li>
                      <li className="px-4 py-2 hover:bg-[#E9FBF2] cursor-pointer">
                        UK
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="text-gray-800 font-medium tracking-[1.6px] cursor-pointer">
                Home
              </li>
              <li className="text-gray-800 font-medium tracking-[1.6px] cursor-pointer">
                Dining
              </li>
              <li className="text-gray-800 font-medium tracking-[1.6px] cursor-pointer">
                Salon/Spa
              </li>
              <li className="text-gray-800 font-medium tracking-[1.6px] cursor-pointer">
                Entertainment
              </li>
              <li className="text-gray-800 font-medium tracking-[1.6px] cursor-pointer">
                Home Services
              </li>

              <li className="relative">
                <button
                  className="flex items-center gap-2"
                  onClick={toggleProfileDropdown}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {profileIcon}
                  </div>
                  <span className="text-gray-800 font-medium tracking-[1.6px]">
                    Profile
                  </span>
                </button>
                {isProfileDropdownOpen && (
                  <div className="mt-2 bg-white shadow-lg rounded-lg border border-gray-200">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-[#E9FBF2] cursor-pointer">
                        Customer Login
                      </li>
                      <li className="px-4 py-2 hover:bg-[#E9FBF2] cursor-pointer">
                        Merchant Login
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
