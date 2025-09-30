// src/components/search/CreatorCard.jsx
import React from "react";

const CreatorCard = ({
name,
location,
price,
services,
image,
profileImage,
rating,
reviews,
responseTime,
onViewProfile,
}) => {
return (
<div className="bg-white rounded-xl shadow-md overflow-hidden hover:ring-2 hover:ring-slate-200 transition-all cursor-pointer group">
{/* Cover Image */}
<div className="relative h-48 md:h-56 overflow-hidden">
<img
src={image}
alt={name}
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
loading="lazy"
/>
{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

{/* Verified Badge */}
<div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
<svg
xmlns="http://www.w3.org/2000/svg"
className="w-4 h-4"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
strokeWidth="2"
>
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>

{/* Price Badge */}
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
<span className="text-sm font-semibold text-slate-800">
${price}/hr
</span>
</div>
</div>

{/* Card Body */}
<div className="p-4 md:p-6">
{/* Profile Info */}
<div className="flex items-start gap-3 mb-4">
<img
src={profileImage}
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
strokeWidth="2"
>
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
<circle cx="12" cy="10" r="3" />
</svg>
<span className="truncate">{location}</span>
</div>
</div>
</div>

{/* Services */}
<div className="flex flex-wrap gap-2 mb-4">
{services.map((s, i) => (
<span
key={i}
className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
>
{s}
</span>
))}
</div>

{/* Rating + Reviews */}
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-1">
{[...Array(5)].map((_, i) => (
<svg
key={i}
xmlns="http://www.w3.org/2000/svg"
className={`w-4 h-4 text-yellow-400 ${
i < Math.floor(rating) ? "fill-current" : "opacity-50"
}`}
fill="currentColor"
viewBox="0 0 24 24"
>
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
</svg>
))}
<span className="ml-2 text-sm text-gray-600 font-medium">
{rating.toFixed(1)}
</span>
</div>
<span className="text-sm text-gray-600">({reviews} reviews)</span>
</div>

{/* Response Time */}
<div className="flex items-center text-sm text-gray-600 mb-4">
<svg
xmlns="http://www.w3.org/2000/svg"
className="w-4 h-4 mr-2"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
strokeWidth="2"
>
<circle cx="12" cy="12" r="10" />
<polyline points="12 6 12 12 16 14" />
</svg>
<span>{responseTime}</span>
</div>

{/* Button */}
<button
  type="button"
  onClick={onViewProfile} 
  className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-200 shadow-lg hover:shadow-xl hover:scale-105 px-6 py-3 text-base w-full"
>
View Profile
</button>
</div>
</div>
);
};

export default CreatorCard;
