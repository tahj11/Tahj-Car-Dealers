import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BmwLineUp from "../components/BmwLineUp";
import Banner from "../components/Banner";
import History from "../components/History";
import AlphaRacer from "../components/AlphaRacer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <BmwLineUp />
      <History />
      <AlphaRacer />
    </div>
  );
};

export default Home;
