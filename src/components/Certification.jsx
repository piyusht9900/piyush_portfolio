import React, { useRef } from 'react';

const Certification = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const certificates = [
    { id: 1, image: '/images/shopify.jpeg', title: 'Java Certificate' },
    { id: 2, image: '/images/shopify.jpeg', title: 'React Certificate' },
    { id: 3, image: '/images/shopify.jpeg', title: 'MySQL Certificate' },
    { id: 4, image: '/images/shopify.jpeg', title: 'IoT Certificate' },
    { id: 5, image: '/images/shopify.jpeg', title: 'Cloud Computing' },
  ];

  return (
    <div
      id="certification"
      className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mt-8 mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        My Certificates
      </h2>

      <div className="relative max-w-screen-xl mx-auto flex items-center">
        {/* Left Arrow (Outside) */}
        <button
          onClick={() => scroll('left')}
          className="text-4xl text-blue-500 hover:text-purple-500 mr-4 bg-transparent border-none outline-none"
        >
          &#8592;
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex space-x-6 px-4 py-4 overflow-x-auto scroll-smooth"
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="min-w-[370px] max-w-[370px] h-[300px] flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-52 object-cover"
              />
              <p className="p-4 font-semibold text-center">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow (Outside) */}
        <button
          onClick={() => scroll('right')}
          className="text-4xl text-blue-500 hover:text-purple-500 ml-4 bg-transparent border-none outline-none"
        >
          &#8594;
        </button>
      </div>

      {/* Hide scrollbar styles */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Certification;
