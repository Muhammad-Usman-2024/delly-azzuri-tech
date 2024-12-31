import React from "react";
import images from "../constant/images";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 pt-16 pb-8 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4 ps-28">
              <img
                src={images.footerLogo}
                alt="Top Deals Logo"
                className="mx-auto lg:mx-0 w-24"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-sm text-gray-600 pe-12">
                Top Deals is an e-commerce site that connects businesses with
                customers by providing discounted offers, service coupons, or
                special offers. Top Deals brings a whole ecommerce platform for
                business owners and customers to save a lot of money.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Payment Partners</h3>
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-4">
                <img src={images.visa} alt="Visa" className="w-14 h-auto" />
                <img
                  src={images.apay}
                  alt="Apple Pay"
                  className="w-14 h-auto"
                />
                <img
                  src={images.spay}
                  alt="Samsung Pay"
                  className="w-14 h-auto"
                />
                <img
                  src={images.master}
                  alt="Mastercard"
                  className="w-14 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 ms-28">
              &copy; Deelly 2023. All rights reserved.
            </p>
            <div className="flex gap-4 me-12">
              <a href="#">
                <img
                  src={images.facebook}
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#">
                <img
                  src={images.twitter}
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#">
                <img
                  src={images.instagram}
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gray-100 py-6 block lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-8 items-start">
            <div className="space-y-4">
              <img
                src={images.footerLogo}
                alt="Top Deals Logo"
                className="w-16"
              />
              <p className="text-sm text-gray-600 text-left">
                Top Deals is an e-commerce site that connects businesses with
                customers by providing discounted offers, service coupons, or
                special offers. Top Deals brings a whole e-commerce platform for
                business owners and customers to save a lot of money.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-left">Our Company</h3>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>
                  <a href="#" className="hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-left">
                Our Payment Partners
              </h3>
              <div className="flex flex-wrap gap-4">
                <img
                  src={images.visa}
                  alt="Visa"
                  className="w-14 h-14 object-contain"
                />
                <img
                  src={images.apay}
                  alt="Apple Pay"
                  className="w-14 h-14 object-contain"
                />
                <img
                  src={images.spay}
                  alt="Samsung Pay"
                  className="w-14 h-14 object-contain"
                />
                <img
                  src={images.master}
                  alt="Mastercard"
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6 ps-6">
          <div className="flex flex-col space-y-4 items-start">
            <p className="text-sm text-gray-600 text-left">
              &copy; Deelly 2023. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#">
                <img
                  src={images.facebook}
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#">
                <img
                  src={images.twitter}
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#">
                <img
                  src={images.instagram}
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
