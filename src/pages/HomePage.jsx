// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/homepage/Hero";
import TopCreators from "../components/homepage/TopCreators";
import HowItWorks from "../components/homepage/HowItWorks";
import Testimonials from "../components/homepage/Testimonials";
import FindCreators from "../components/homepage/FindCreators";


export default function HomePage() {
  return (
    <>
      <Hero />
      <TopCreators />
      <HowItWorks />
      <Testimonials />
      <FindCreators />
    </>
  );
}
