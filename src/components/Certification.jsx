import React, { useRef, useEffect } from 'react';

const Certification = () => {
  const scrollRef = useRef(null);

  // Auto-scroll every 3 seconds (smoothly)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 400,
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const certificates = [
    { id: 1, image: '/images/cert1.jpg' },
    { id: 2, image: '/images/cert2.jpg' },
    { id: 3, image: '/images/cert1.jpg' },
    { id: 4, image: '/images/cert2.jpg' },
    { id: 5, image: '/images/cert1.jpg' },
  ];

  return (
    <div
      id="certification"
      className="py-16 px-4 text-center text-gray-900 dark:text-white bg-blue-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Certification
      </h2>
      <div className="relative max-w-screen-xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="text-4xl text-blue-500 hover:text-purple-500 mr-4 bg-transparent border-none outline-none"
        >
          &#8592;
        </button>

        {/* Scrollable certificate cards */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex space-x-6 px-4 py-4 overflow-x-auto scroll-smooth"
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="min-w-[370px] max-w-[370px] h-[250px] flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl overflow-hidden transform transition hover:scale-105"
              style={{
                boxShadow:
                  '0 10px 25px rgba(96, 165, 250, 0.25), 0 6px 10px rgba(168, 85, 247, 0.2)',
              }}
            >
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
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
