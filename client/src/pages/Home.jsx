import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BmwLineUp from "../components/BmwLineUp";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <BmwLineUp />
    </div>
  );
};

export default Home;
