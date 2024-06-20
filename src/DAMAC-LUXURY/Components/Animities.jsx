import React from "react";
import ImageGallery from "./ImageGallery";

const Animities = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="text-center py-8">
        <h3 className="uppercase text-sky-800 text-2xl">
          Harbour Lights
        </h3>
        <span className="font-thin text-xs block">Слой_x0020_1</span>
      </div>
      <div className="text-center py-8">
        <h2 className="font-oswald font-medium text-3xl text-sky-800 uppercase pb-4">
          Features & Amenities
        </h2>
        <p className="font-light leading-6">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
      </div>
        <ImageGallery />
    </div>
  );
};

export default Animities;
