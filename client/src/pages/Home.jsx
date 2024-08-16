import React from "react";
import Hero from "../components/home/Hero";
import Bar from "../components/home/Bar";
import NewProduct from "../components/home/NewProduct";
import UniqueCollection from "../components/home/UniqueCollection";
import Gallery from "../components/home/Gallery";
import About from "../components/home/About";
import PremiumCollection from "../components/home/ PremiumCollection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bar />
      <NewProduct />
      <UniqueCollection />
      <Gallery />
      <About />
      <PremiumCollection />
      <Testimonials />
      </div>
  );
};

export default Home;
