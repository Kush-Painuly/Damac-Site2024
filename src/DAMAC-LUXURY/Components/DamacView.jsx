import React from "react";
import ScreenView1 from "../../assets/screenView1.jpg";
import ScreenView2 from "../../assets/screenView2.jpg";
import ScreenView3 from "../../assets/screenView3.jpg";
import ScreenView4 from "../../assets/screenView4.jpg";
import ScreenView5 from "../../assets/screenView5.jpg";

const DamacView = () => {
  return (
    <>
      <div className="mx-auto w-3/4 my-5 relative">
        <div className="w-full h-80 mb-5">
          <img
            src={ScreenView1}
            alt="ScreenView1"
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[32%] rounded-full bg-white p-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            className="font-bold"
            viewBox="0 0 256 256"
          >
            <path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"></path>
          </svg>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="w-full md:w-1/4 mb-5 md:mb-0">
            <img
              src={ScreenView2}
              alt="screenview2"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/4 mb-5 md:mb-0">
            <img
              src={ScreenView3}
              alt="screenview3"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/4 mb-5 md:mb-0">
            <img
              src={ScreenView4}
              alt="screenview4"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/4">
            <img
              src={ScreenView5}
              alt="screenview5"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DamacView;
