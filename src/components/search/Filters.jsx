// src/components/search/Filters.jsx
import React from "react";

const Filters = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        <h3 className="font-semibold text-slate-800">Filters</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price per hour
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500">
            <option value="all">Any price</option>
            <option value="0-100">Under $100</option>
            <option value="100-150">$100 - $150</option>
            <option value="150-200">$150 - $200</option>
            <option value="200">$200+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500">
            <option value="all">All services</option>
            <option value="photography">Photography</option>
            <option value="videography">Videography</option>
            <option value="portrait">Portrait</option>
            <option value="event">Event</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum rating
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500">
            <option value="all">Any rating</option>
            <option value="4.5">4.5+ stars</option>
            <option value="4.0">4.0+ stars</option>
            <option value="3.5">3.5+ stars</option>
          </select>
        </div>
        <div className="flex items-end">
    <button className="w-full px-3 py-3 text-sm font-medium rounded-lg text-white bg-slate-600 hover:bg-slate-700">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
