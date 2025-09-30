"use client";
import React from "react";

export default function BecomeCreator() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Become a Creator
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
        Join our platform and share your amazing travel experiences with the
        world. Inspire others, grow your community, and monetize your content.
      </p>
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <textarea
          placeholder="Tell us about your travel content"
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-all"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
