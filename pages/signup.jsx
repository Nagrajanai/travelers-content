import React from "react";

export default function Signup() {
return (
<div className="flex min-h-screen items-center justify-center bg-gray-100">
<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

<form className="space-y-4">
{/* Name */}
<div>
<label className="block text-sm font-medium text-gray-700">Full Name</label>
<input
type="text"
className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200"
placeholder="Enter your name"
/>
</div>

{/* Email */}
<div>
<label className="block text-sm font-medium text-gray-700">Email</label>
<input
type="email"
className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200"
placeholder="Enter your email"
/>
</div>

{/* Password */}
<div>
<label className="block text-sm font-medium text-gray-700">Password</label>
<input
type="password"
className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200"
placeholder="Enter your password"
/>
</div>

{/* Button */}
<button
type="submit"
className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
>
Sign Up
</button>
</form>

<p className="text-sm text-center text-gray-600 mt-4">
Already have an account?{" "}
<a href="/login" className="text-green-600 font-semibold hover:underline">
Log In
</a>
</p>
</div>
</div>
);
}
