// src/components/HowItWorks.jsx
import React from "react";

const HowItWorks = () => {
return (
<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Header */}
<div className="transition-all duration-700 translate-y-8 text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">How It Works</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
Connect with amazing creators in three simple steps and turn your travel moments into lasting memories.
</p>
</div>

{/* Steps */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
{/* Step 1 */}
<div className="transition-all duration-700 translate-y-8 relative group ">
<div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent transform -translate-x-6 z-0"></div>
<div className="relative bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 motion-preset-bounce-sm z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 motion-preset-bounce-md">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-8 h-8 text-white">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-600 transition-colors">Discover</h3>
<p className="text-gray-600 leading-relaxed">Browse talented creators in your destination city</p>
</div>
</div>

{/* Step 2 */}
<div className="transition-all duration-700 translate-y-8 relative group">
<div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent transform -translate-x-6 z-0"></div>
<div className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 motion-preset-bounce-sm z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 motion-preset-bounce-md">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-8 h-8 text-white">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect width="18" height="18" x="3" y="4" rx="2"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-600 transition-colors">Book</h3>
<p className="text-gray-600 leading-relaxed">Schedule your session with instant confirmation</p>
</div>
</div>

{/* Step 3 */}
<div className="transition-all duration-700 translate-y-8 relative group">
<div className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 motion-preset-bounce-sm z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
<div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 motion-preset-bounce-md">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera w-8 h-8 text-white">
<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
</div>
<h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-600 transition-colors">Create</h3>
<p className="text-gray-600 leading-relaxed">Capture unforgettable memories with local experts</p>
</div>
</div>
</div>

{/* Call to action */}
<div className="transition-all duration-700 translate-y-8 text-center mt-16">
<div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-8 md:p-12 text-white">
<h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
<p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
Join thousands of travelers who have captured their perfect moments with our talented creators.
</p>
<button className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 motion-preset-bounce-md shadow-lg">
Get Started Today
</button>
</div>
</div>
</div>
</section>
);
};

export default HowItWorks;
