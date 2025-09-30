// src/components/CreatorCard.jsx
import React from "react";

const CreatorCard = ({ name, city, country, price, avatar, cover, tags, rating, reviews, responseTime,
  onViewProfile, }) => {
return (
<div className="flex-shrink-0 snap-start">
<div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 cursor-pointer group relative">
{/* ✅ Badge */}
<div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full motion-preset-bounce-sm z-10">
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
className="w-4 h-4"
>
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>

{/* Cover Image */}
<div className="relative h-48 md:h-56 overflow-hidden">
<img
src={cover}
alt={name}
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
loading="lazy"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
<span className="text-sm font-semibold text-slate-800">${price}/hr</span>
</div>
</div>

{/* Info */}
<div className="p-4 md:p-6">
<div className="flex items-start gap-3 mb-4">
<img
src={avatar}
alt={name}
className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
/>
<div className="flex-1 min-w-0">
<h3 className="font-semibold text-lg text-slate-800 truncate group-hover:text-slate-600 transition-colors">
{name}
</h3>
<div className="flex items-center text-sm text-gray-600 mt-1">
<svg
xmlns="http://www.w3.org/2000/svg"
className="w-4 h-4 mr-1"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
<circle cx="12" cy="10" r="3" />
</svg>
<span className="truncate">{city}, {country}</span>
</div>
</div>
</div>

{/* Tags */}
<div className="flex flex-wrap gap-2 mb-4">
{tags.map((tag, i) => (
<span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tag}</span>
))}
</div>

{/* Rating */}
{/* Rating */}
<div className="flex items-center gap-1 mb-4">
{Array.from({ length: 5 }, (_, i) => (
<svg
key={i}
xmlns="http://www.w3.org/2000/svg"
className={`w-4 h-4 ${
i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
}`}
fill="currentColor"
viewBox="0 0 24 24"
stroke="none"
>
<path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.4 8.164L12 18.896l-7.334 3.859 1.4-8.164-5.934-5.78 8.2-1.193z" />
</svg>
))}
<span className="text-sm text-gray-600 ml-2">({reviews} reviews)</span>
</div>


{/* Response Time */}
<div className="flex items-center text-sm text-gray-600 mb-4">
<svg
xmlns="http://www.w3.org/2000/svg"
className="w-4 h-4 mr-2"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<circle cx="12" cy="12" r="10" />
<polyline points="12 6 12 12 16 14" />
</svg>
<span>{responseTime}</span>
</div>

<button
    onClick={onViewProfile}
    className="w-full px-6 py-3 bg-slate-600 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-all"
  >
    View Profile
  </button>
</div>
</div>
</div>
);
};

export default CreatorCard;
