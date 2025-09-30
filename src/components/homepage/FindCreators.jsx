// src/components/FindCreators.jsx
import React from "react";

const FindCreators = () => {
return (
<section className="py-20 bg-gradient-to-r from-slate-600 to-slate-700 text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="transition-all duration-700 translate-y-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Magic?</h2>
      <p className="text-xl mb-8 text-white/90">
        Join thousands of travelers creating unforgettable memories with our amazing creators.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#/search"
          className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 motion-preset-bounce-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-slate-600 text-slate-600 bg-white hover:bg-slate-600 hover:text-white hover:scale-105 focus:ring-slate-200 shadow-md hover:shadow-lg px-8 py-4 text-lg motion-preset-bounce-md"
        >
          Find Creators
        </a>
        <a
          href="#/become-creator"
          className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 motion-preset-bounce-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 hover:bg-slate-50 hover:text-slate-700 focus:ring-slate-200 hover:scale-105 px-8 py-4 text-lg text-white border border-white hover:bg-white/20 motion-preset-bounce-md"
        >
          Become a Creator
        </a>
      </div>
    </div>
  </div>
</section>

);
};

export default FindCreators;
