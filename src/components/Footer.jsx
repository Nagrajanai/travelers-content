// src/components/Footer.jsx
import React from "react";

const Footer = () => {

return (

<footer className="bg-slate-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
      {/* Logo + About */}
      <div className="lg:col-span-2">
        <div className="flex items-center space-x-3 mb-6">
          <img
            src="https://heyboss.heeyo.ai/1753312924-43b2c701.png"
            alt="CreatorConnect"
            className="h-8 w-8 brightness-0 invert"
          />
          <span className="text-xl font-bold">Travelers Content</span>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Connecting travelers with talented local content creators worldwide.
          Capture your perfect moments with professional photographers and
          videographers.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://x.com/heybossAI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 rounded-full bg-slate-700 text-gray-300 transition-all duration-300 motion-preset-bounce-sm hover:scale-110 hover:text-blue-400"
          >
            {/* Twitter Icon */}
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
              className="lucide lucide-twitter w-5 h-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/heyboss-xyz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-slate-700 text-gray-300 transition-all duration-300 motion-preset-bounce-sm hover:scale-110 hover:text-blue-600"
          >
            {/* LinkedIn Icon */}
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
              className="lucide lucide-linkedin w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@heyboss-xyz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-2 rounded-full bg-slate-700 text-gray-300 transition-all duration-300 motion-preset-bounce-sm hover:scale-110 hover:text-red-500"
          >
            {/* YouTube Icon */}
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
              className="lucide lucide-youtube w-5 h-5"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
          <a
            href="https://discord.com/invite/JEjdkQuHz4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="p-2 rounded-full bg-slate-700 text-gray-300 transition-all duration-300 motion-preset-bounce-sm hover:scale-110 hover:text-indigo-500"
          >
            {/* Discord Icon */}
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
              className="lucide lucide-message-circle w-5 h-5"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Columns */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Features
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Creators</h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#become-creator"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Become a Creator
            </a>
          </li>
          <li>
            <a
              href="#guidelines"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Creator Guidelines
            </a>
          </li>
          <li>
            <a
              href="#success-stories"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Success Stories
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#help"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#safety"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Safety
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#careers"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#press"
              className="text-gray-300 hover:text-white transition-colors duration-300 motion-preset-bounce-sm"
            >
              Press
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-700 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          © 2025 Travelers Content. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a
            href="https://legal.heyboss.tech/67845a5e6e6bf5ecd4a3ae47/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors motion-preset-bounce-sm"
          >
            Privacy Policy
          </a>
          <a
            href="https://legal.heyboss.tech/67845cfe76f9675292514b80/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors motion-preset-bounce-sm"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>




);


};



export default Footer;