import React from "react";
import feat1 from "../../assets/circle.jpg";
import feat2 from "../../assets/circle2.jpg";
import feat3 from "../../assets/circle3.jpg";
import feat4 from "../../assets/circle4.png";
const ImageGallery = () => {
  return (
    <>
      <div className="mx-auto w-3/4">
        <div className="flex items-center justify-evenly flex-wrap py-3">
          <div className="shadow-2xl p-4 rounded-lg">
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <img src={feat1} className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs mt-1 font-medium text-sky-800">
              Floating <br />
              Pools
            </p>
          </div>
          <div className="shadow-2xl p-4 rounded-lg">
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <img src={feat2} className="w-full h-full object-cover" />
            </div>
            <p className=" text-center text-xs mt-1 font-medium text-sky-800">
              Spacious Cabins <br />
              like Rooms
            </p>
          </div>
          <div className="shadow-2xl p-4 rounded-lg">
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <img src={feat3} className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs mt-1 font-medium text-sky-800">
              Sea Facing <br />
              Swimming Pools
            </p>
          </div>
          <div className="shadow-2xl p-4 rounded-lg">
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <img src={feat4} className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs mt-1 font-medium text-sky-800">
              Gymnaisum <br />& Fitness
            </p>
          </div>
        </div>
        <p className="text-xs text-end font-light leading-[47px]">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
      <div className="flex items-center justify-end gap-2">
        <button className="px-10 py-2 border border-indigo-800 rounded-md bg-violet-950 text-white cursor-pointer">Exteriors</button>
        <button className="px-10 py-2 border border-indigo-800 rounded-md bg-transparent text-violet-950 cursor-pointer">Interiors</button>
      </div>
      </div>
    </>
  );
};

export default ImageGallery;
