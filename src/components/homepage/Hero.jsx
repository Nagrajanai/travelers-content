import React from "react";
import SearchForm from "./SearchForm";

export default function Hero() {
return (
<section className="relative h-screen flex items-center justify-center">
{/* 🔹 Background video + gradient */}
<div className="absolute inset-0 overflow-hidden">
<video
className="absolute top-0 left-0 w-full h-full object-cover"
autoPlay
loop
muted
playsInline
>
<source src="/video/banner2.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>

{/* Gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80 opacity-85"></div>


</div>

{/* 🔹 Foreground content */}
<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
Capture Your Journey.
<br />
<span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
Uber for Content Creation.
</span>
</h1>

<p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed max-w-2xl mx-auto">
Connect with talented local photographers and videographers wherever
your travels take you. Turn your adventures into lasting memories with
professional creators.
</p>

{/* ✅ Search component */}
<SearchForm />

{/* 🔹 Stats section */}
<div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-2">
10K+
</div>
<div className="text-white/80 text-sm md:text-base">Creators</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-2">
50K+
</div>
<div className="text-white/80 text-sm md:text-base">Sessions</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-2">
200+
</div>
<div className="text-white/80 text-sm md:text-base">Cities</div>
</div>
</div>
</div>
</section>
);
}
