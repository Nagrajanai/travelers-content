// src/components/search/MapSection.jsx
import React, { useState } from "react";
import { useRouter } from "next/router";  
import { creators } from "../../data/creators"; 

const MapSection = () => {
  const router = useRouter();            
  const [hoveredPin, setHoveredPin] = useState(null);

  const pins = creators.map((c, index) => ({
    id: c.slug,
    name: c.name,
    price: c.price,
    image: c.image,
    top: `${20 + (index % 5) * 12}%`,
    left: `${10 + (index % 6) * 15}%`,
  }));

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden h-96 lg:h-[600px] relative">
        <img
          src="https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&h=600&fit=crop"
          alt="World Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/20" />

        {/* Dynamic Pins */}
        {pins.map((pin) => (
          <div
            key={pin.id}
            className="absolute transform -translate-x-1/2 -translate-y-full"
            style={{ top: pin.top, left: pin.left }}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
            onClick={() => router.push(`/profile/${pin.id}`)}   
          >
            {/* Pin Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-8 h-8 cursor-pointer drop-shadow-lg transition-transform duration-200 ${
                hoveredPin === pin.id ? "text-red-600 scale-110" : "text-slate-600"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            {/* Hover Card */}
            {hoveredPin === pin.id && (
              <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-56 overflow-hidden z-50 p-3 flex items-center gap-3">
                <img
                  src={pin.image}
                  alt={pin.name}
                  className="w-[50px] h-[50px] rounded-full object-cover border border-gray-200 shadow"
                />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 truncate">{pin.name}</h4>
                  <p className="text-xs text-gray-600">${pin.price}/hr</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer Info */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-sm font-medium text-slate-700 mb-1">
            {pins.length} creators found
          </div>
          <div className="text-xs text-gray-600">Click pins to view profiles</div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
