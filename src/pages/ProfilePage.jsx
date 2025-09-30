import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { creators } from "../data/creators";

const ProfilePage = () => {
  const { slug } = useParams();
  const creator = creators.find((c) => c.slug === slug);

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!creator) {
    return <h2 className="text-center text-red-500 mt-10">Profile not found!</h2>;
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
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center py-10"
        style={{
          backgroundImage: `url(${
            creator.bannerImage ||
            "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200"
          })`,
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
                ⭐ {creator.rating} (
                {creator.reviews} {creator.reviews === 1 ? "review" : "reviews"})
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
            <button className="bg-white text-slate-800 hover:bg-slate-200 font-semibold rounded-lg px-6 py-2 shadow-md hover:shadow-lg transition">
              Request to Book
            </button>
            <button
              onClick={handleShare}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold rounded-lg px-6 py-2 transition shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h2 className="text-5xl font-bold text-slate-800 mb-[30px]">Portfolio</h2>

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

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={index}
        slides={creator.portfolio.map((img) => ({ src: img }))}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </>
  );
};

export default ProfilePage;
