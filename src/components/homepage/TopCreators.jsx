import React, { useRef, useState, useEffect } from "react";
import CreatorCard from "./CreatorCard";
import { creators } from "../../data/creators";
import { useRouter } from "next/router";

const TopCreators = () => {
const carouselRef = useRef(null);
const router = useRouter(); 
const [canScrollPrev, setCanScrollPrev] = useState(false);
const [canScrollNext, setCanScrollNext] = useState(true);

const updateButtonStates = () => {
if (!carouselRef.current) return;
const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
setCanScrollPrev(scrollLeft > 0);
setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
};

const handleScroll = (dir) => {
if (!carouselRef.current) return;
const card = carouselRef.current.querySelector(".snap-start");
if (!card) return;
const cardWidth =
card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
carouselRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
};

useEffect(() => {
const carousel = carouselRef.current;
if (!carousel) return;
updateButtonStates();
carousel.addEventListener("scroll", updateButtonStates);
window.addEventListener("resize", updateButtonStates);
return () => {
carousel.removeEventListener("scroll", updateButtonStates);
window.removeEventListener("resize", updateButtonStates);
};
}, []);

return (
<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-6">
Top Creators Near You
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
Discover amazing photographers and videographers who know their cities
inside out.
</p>

<div className="relative mb-12 pb-[20px]">
{/* Left Arrow */}
<button
onClick={() => handleScroll(-1)}
disabled={!canScrollPrev}
className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
>
<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
className="w-5 h-5 text-slate-700"
>
<path d="m15 18-6-6 6-6" />
</svg>
</button>

{/* Carousel */}
<div
ref={carouselRef}
className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 scrollbar-hide scroll-smooth pb-[20px]"
>
{creators.map((c, i) => (
<CreatorCard
key={i}
name={c.name}
city={c.location.split(",")[0]}     
country={c.location.split(",")[1]}  
price={c.price}
avatar={c.image}       
cover={c.bannerImage}  
tags={c.specialties}   
rating={c.rating}
reviews={c.reviews}
responseTime={c.responseTime}
onViewProfile={() => router.push(`/creator/${c.slug}`)} 
/>
))}
</div>

{/* Right Arrow */}
<button
onClick={() => handleScroll(1)}
disabled={!canScrollNext}
className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
>
<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
className="w-5 h-5 text-slate-700"
>
<path d="m9 18 6-6-6-6" />
</svg>
</button>
</div>

<div className="text-center">
<a
href="/search"
className="px-8 py-4 bg-slate-600 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-all"
>
Explore All Creators
</a>
</div>
</div>
</section>
);
};

export default TopCreators;
