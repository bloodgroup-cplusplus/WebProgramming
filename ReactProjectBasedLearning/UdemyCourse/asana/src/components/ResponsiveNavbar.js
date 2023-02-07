import React from 'react';

const ResponsiveNavbar = () => (
  <nav className="flex items-center justify-between px-4 py-3 bg-gray-800">
    <div className="flex items-center">
      <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2zm8 3l4 5H4l4-5z"/>
      </svg>
      <span className="font-medium text-white">My App</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div className="hidden lg:block">
      <ul className="flex justify-center">
        <li className="mx-3">
          <a href="#" className="inline-block py-2 px-4 text-gray-200 hover:text-white">Home</a>
        </li>
        <li className="mx-3">
          <a href="#" className="inline-block py-2 px-4 text-gray-200 hover:text-white">About</a>
        </li>
        <li className="mx-3">
          <a href="#" className="inline-block py-2 px-4 text-gray-200 hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default ResponsiveNavbar;
