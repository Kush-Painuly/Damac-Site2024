import React from "react";
import "../Animations/animate.css";
const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="p-4 md:w-3/5 slideL">
          <h1 className="font-oswald text-custom-48 font-medium text-white leading-lh-62 uppercase mb-4 md:mb-6">
            Harbour Lights de <span className="text-sky-500">GRESOGONO</span>
          </h1>
          <p className="font-poppins font-bold leading-8 text-white text-xl md:text-2xl mb-4 md:mb-6">
            1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
          </p>
          <div className="mt-1">
            <ul className="list-none">
              <li className="bg-lightshade border-l-2 border-sky-600 font-poppins font-normal text-sm text-white p-2 my-1">
                Rental Returns of
                <span className="font-semibold text-white">UPTO 11%**</span>
              </li>
              <li className="bg-lightshade border-l-2 border-sky-600 font-poppins font-normal text-sm text-white p-2">
                Capital Appreciation of
                <span className="font-semibold text-white">UPTO 32%**</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-extralightshade backdrop-blur-md text-center py-4 md:py-1 rounded-md  md:w-1/3 slideR">
          <p className="font-normal text-xs md:text-sm leading-5 tracking-wider text-white">
            PRICING STARTS FROM
          </p>
          <h1 className="font-oswald font-medium text-4xl md:text-5xl text-white leading-lh-62 md:leading-lh-normal">
            $ 425,000
          </h1>
          <p className="font-oswald leading-9 font-normal text-lg text-white">
            AED 1.3 Million
          </p>
          <button className="border border-sky-500 bg-sky-500 font-poppins font-bold text-xs md:text-sm tracking-wider leading-5 text-white py-2 my-4 md:my-2 px-4 rounded-md">
            GET A PRESENTATION
          </button>
          <div className="bg-extralightshade backdrop-blur-md w-72 py-2 mx-auto md:mx-0">
            <p className="text-white text-xs leading-4 text-center">
              Get an Expert’s Presentation of Real Estate in Dubai for Life and
              investment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
