import React from "react";
import Hero from "../src/components/homepage/Hero.jsx";

import FindCreators from "../src/components/homepage/FindCreators.jsx";
import HowItWorks from "../src/components/homepage/HowItWorks.jsx";
import Testimonials from "../src/components/homepage/Testimonials.jsx";
import TopCreators from "../src/components/homepage/TopCreators.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
       <TopCreators />
        <HowItWorks />
        <Testimonials />
        <FindCreators />
     
      
     
    </div>
  );
}
