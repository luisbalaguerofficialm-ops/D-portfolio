import React from "react";
import HeroSection from "../components/HeroSection";
import MainHome from "./home/MainHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-screen h-auto overflow-x-hidden m-0 p-0">
      <div className="z-50 backdrop-blur-[10px] text-white fixed w-full top-0 sm:px-[100px] px-6">
        <Navbar />
      </div>
      <div className="m-0 p-0">
        <HeroSection />

        <MainHome />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
