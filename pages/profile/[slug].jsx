import React, { useState } from "react";
import { useRouter } from "next/router";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { creators } from "../../src/data/creators";
import BookRequestModal from "../../src/components/BookRequestModal";



export default function ProfilePage() {
const router = useRouter();
const { slug } = router.query;

const creator = creators.find((c) => c.slug === slug);
const reviewsData = creator?.reviewsData || [];
const [showModal, setShowModal] = useState(false);

const [isOpen, setIsOpen] = useState(false);
const [index, setIndex] = useState(0);
const [activeTab, setActiveTab] = useState("about");  

if (!creator) {
return (
<div className="min-h-screen flex items-center justify-center">
<p className="text-lg text-gray-600">Creator not found</p>
</div>
);
}

const handleShare = () => {
if (navigator.share) {
navigator.share({
title: creator.name,
text: `Check out ${creator.name}'s profile on our platform!`,
url: window.location.href,
});
} else {
alert("Sharing not supported in this browser.");
}
};



return (
<>
{/* Banner */}
<div
className="relative bg-cover bg-center py-10"
style={{
backgroundImage: `url(${creator.bannerImage || creator.image})`,
}}
>
<div className="absolute inset-0 bg-black/40 z-0" />
<div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
{/* Profile Info */}
<div className="flex items-center gap-6">
<img
src={creator.image}
alt={creator.name}
className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
/>
<div>
<h1 className="text-2xl font-bold">{creator.name}</h1>
<p className="text-gray-200">{creator.location}</p>
<p className="text-white font-semibold">${creator.price}/hr</p>
<p className="text-yellow-400 text-sm">
⭐ {creator.rating} ({creator.reviews}{" "}
{creator.reviews === 1 ? "review" : "reviews"})
</p>
</div>
</div>

{/* Actions */}
<div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
<button
onClick={() => setShowModal(true)}
className="bg-white text-slate-800 hover:bg-slate-200 font-semibold rounded-lg px-6 py-2 shadow-md hover:shadow-lg transition"
>
Request to Book
</button>
<button
onClick={handleShare}
className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold rounded-lg px-6 py-2 transition shadow-md hover:shadow-lg flex items-center gap-2"
>
Share
</button>
</div>
</div>
</div>

{/* Portfolio */}
<div className="max-w-6xl mx-auto px-4 py-10 text-center">
<h2 className="text-5xl font-bold text-slate-800 mb-8">Portfolio</h2>

{creator.portfolio?.length > 0 ? (
<div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
{creator.portfolio.map((img, i) => (
<img
key={i}
src={img}
alt={`Portfolio ${i}`}
className="w-full rounded-xl shadow-sm hover:opacity-90 transition cursor-pointer"
onClick={() => {
setIndex(i);
setIsOpen(true);
}}
/>
))}
</div>
) : (
<p className="text-gray-500">No portfolio images available.</p>
)}
</div>

{/* Tabs */}
<section className="py-16 bg-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 border-b border-gray-200 ml-6">
<nav className="flex space-x-8" role="tablist">
<button
role="tab"
aria-selected={activeTab === "about"}
aria-controls="tabpanel-about"
id="tab-about"
tabIndex={activeTab === "about" ? 0 : -1}
className={`py-3 px-1 font-medium text-base transition-all duration-300 border-b-2 relative group motion-preset-bounce-sm ${
activeTab === "about"
? "text-slate-600 border-slate-600"
: "text-gray-400 border-transparent"
}`}
onClick={() => setActiveTab("about")}
>
About
</button>
<button
role="tab"
aria-selected={activeTab === "reviews"}
aria-controls="tabpanel-reviews"
id="tab-reviews"
tabIndex={activeTab === "reviews" ? 0 : -1}
className={`py-3 px-1 font-medium text-base transition-all duration-300 border-b-2 relative group motion-preset-bounce-sm ${
activeTab === "reviews"
? "text-slate-600 border-slate-600"
: "text-gray-400 border-transparent"
}`}
onClick={() => setActiveTab("reviews")}
>
Reviews ({reviewsData.length})
</button>
</nav>
</div>

{/* About Panel */}
<div
id="tabpanel-about"
role="tabpanel"
aria-labelledby="tab-about"
hidden={activeTab !== "about"}
className="transition-all duration-300 opacity-100 motion-preset-slide-up motion-duration-300"
>
<div className="p-6">
<h3 className="text-2xl font-bold text-slate-800 mb-4">
About {creator.name}
</h3>
<p className="text-gray-700 leading-relaxed mb-6">{creator.about}</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
<div className="flex items-center">
{/* Specialties icon */}
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
className="lucide lucide-camera w-5 h-5 mr-2 text-slate-600"
>
<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
Specialties: {creator.specialties?.join(", ") || "Not specified"}
</div>

<div className="flex items-center">
{/* Rate icon */}
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
className="lucide lucide-dollar-sign w-5 h-5 mr-2 text-slate-600"
>
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span>Rate: ${creator.price}/hr</span>
</div>

<div className="flex items-center">
{/* Languages icon */}
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
className="lucide lucide-message-circle w-5 h-5 mr-2 text-slate-600"
>
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
Languages: {creator.languages?.join(", ") || "Not specified"}
</div>

<div className="flex items-center">
{/* Response Time icon */}
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
className="lucide lucide-calendar-check w-5 h-5 mr-2 text-slate-600"
>
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect width="18" height="18" x="3" y="4" rx="2"></rect>
<path d="M3 10h18"></path>
<path d="m9 16 2 2 4-4"></path>
</svg>
<span>{creator.responseTime}</span>
</div>
</div>
</div>
</div>

{/* Reviews Panel */}
<div
id="tabpanel-reviews"
role="tabpanel"
aria-labelledby="tab-reviews"
hidden={activeTab !== "reviews"}
className="transition-all duration-300 opacity-100 motion-preset-slide-up motion-duration-300"
>
<div className="p-6 max-w-3xl  text-left ">
<h3 className="text-2xl font-bold text-slate-800 mb-6">
Reviews for {creator.name}
</h3>

{reviewsData.length > 0 ? (
reviewsData.map((review, idx) => (
<div
key={idx}
className="mb-6 border-b border-gray-300 pb-4 last:border-0"
>
<p className="font-semibold text-slate-700">{review.reviewerName}</p>
<p className="text-yellow-400 mb-1">
{"★".repeat(review.rating)}
</p>
<p className="text-gray-700">{review.comment}</p>
</div>
))
) : (
<p className="text-gray-600">No reviews yet.</p>
)}
</div>
</div>
</div>
</section>

{/* Lightbox */}
<Lightbox
open={isOpen}
close={() => setIsOpen(false)}
index={index}
slides={creator.portfolio.map((img) => ({ src: img }))}
on={{ view: ({ index }) => setIndex(index) }}
/>
<BookRequestModal
isOpen={showModal}
onClose={() => setShowModal(false)}
creator={creator}
/>

</>
);
}
