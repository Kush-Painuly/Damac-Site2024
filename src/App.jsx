import React from "react";
import Home from "./DAMAC-LUXURY/Home";
import Features from "./DAMAC-LUXURY/Components/Features";
import Animities from "./DAMAC-LUXURY/Components/Animities";
import DamacView from "./DAMAC-LUXURY/Components/DamacView";
import Footer from "./DAMAC-LUXURY/Components/Footer";
import { useInView } from "react-intersection-observer";
import "animate.css";
const App = () => {
  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: amenitiesRef, inView: amenitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: damacViewRef, inView: damacViewInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <div ref={homeRef} className={`relative bg-damac-bg bg-no-repeat bg-cover bg-18 h-full w-full ${homeInView ? "animate__animated animate__fadeInUp": ""}`}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content container */}
        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-xl">
          <Home />
        </div>
      </div>
      
      {/* Main content section */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-xl">
      <div
          ref={featuresRef}
          className={`mt-16 ${
            featuresInView ? "animate__animated animate__fadeInLeft" : ""
          }`}
        >
          <Features />
        </div>
        <div
          ref={amenitiesRef}
          className={`mt-16 ${
            amenitiesInView ? "animate__animated animate__fadeInUp" : ""
          }`}
        >
          <Animities />
        </div>
        <div
          ref={damacViewRef}
          className={`mt-16 ${
            damacViewInView ? "animate__animated animate__fadeInDown" : ""
          }`}
        >
          <DamacView />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
