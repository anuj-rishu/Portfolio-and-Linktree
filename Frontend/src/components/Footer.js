import React from 'react';

function Footer({ date }) {
  return (
    <div className=''>
      <footer className="backdrop-filter backdrop-blur-lg bg-opacity-10 py-4 bg-gray-900 "  >
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center sm:flex-row sm:justify-between">
          <div className="text-white mb-2 sm:mb-1 text-sm sm:text-base">Last Updated: {date}</div>
          <div className="text-white text-sm sm:text-base">
            Crafted with ❤️ by <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-white underline">Anuj Rishu Tiwari</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;