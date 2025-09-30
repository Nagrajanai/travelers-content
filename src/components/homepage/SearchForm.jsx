"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function SearchForm() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    router.push(`/search?location=${encodeURIComponent(location)}&service=${encodeURIComponent(service)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-sm shadow-2xl p-2 rounded-2xl max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-2">
        {/* Location input */}
        <div className="flex items-center flex-1 min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-slate-600 ml-3 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where are you going?"
            className="flex-1 px-4 py-3 border-0 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-base"
          />
        </div>

        {/* Service select */}
        <div className="flex items-center flex-1 min-w-0 md:border-l md:border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-slate-600 ml-3 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex-1 px-4 py-3 border-0 bg-transparent text-gray-800 focus:outline-none text-base cursor-pointer"
          >
            <option value="">Any service</option>
            <option value="photography">Photography</option>
            <option value="videography">Videography</option>
            <option value="both">Photo & Video</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform focus:outline-none bg-slate-600 text-white hover:bg-slate-700 shadow-lg px-8 py-4 text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          Search Creators
        </button>
      </div>
    </form>
  );
}
