import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BmwLineUp from "../components/BmwLineUp";
import Banner from "../components/Banner";
import History from "../components/History";
import AlphaRacer from "../components/AlphaRacer";
import ShowCase from "../components/ShowCase";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <BmwLineUp />
      <History />
      <ShowCase />
      {/* <AlphaRacer /> */}
      <MobileFooter />
    </div>
  );
};

export default Home;
