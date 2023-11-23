import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BmwLineUp from "../components/BmwLineUp";
import Banner from "../components/Banner";
import History from "../components/History";
import ShowCase from "../components/ShowCase";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { useMediaQuery } from "@chakra-ui/react";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <BmwLineUp />
      <History />
      <ShowCase />
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default Home;
