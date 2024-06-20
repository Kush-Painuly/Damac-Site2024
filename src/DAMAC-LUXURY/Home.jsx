import React from "react";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";

const Home = () => {
  return (
    <>
      <div>
        <Navigation/>
        <div className="p-5">
        <Banner/>
        </div>
      </div>
    </>
  );
};

export default Home;
