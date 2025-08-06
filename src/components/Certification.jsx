import React, { useRef, useEffect } from 'react';

const Certification = () => {
  const scrollRef = useRef(null);

  const certificates = [
    { id: 1, image: '/images/cert7.jpg' },
    { id: 2, image: '/images/cert1.jpg' },
    { id: 3, image: '/images/cert2.jpg' },
    { id: 4, image: '/images/cert3.jpg' },
    { id: 5, image: '/images/cert4.jpg' },
    { id: 6, image: '/images/cert5.jpg' },
    { id: 7, image: '/images/cert6.jpg' },
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // If at end, scroll back to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by exactly one viewport (one card on mobile)
        scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div
      id="certification"
      className="py-16 px-4 text-center text-gray-900 dark:text-white bg-blue-100 dark:bg-gray-900 transition-colors duration-0"
    >
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Certification
      </h2>

      <div className="relative max-w-screen-xl mx-auto flex items-center">
        {/* Left Arrow (now visible on mobile too) */}
        <button
          onClick={() => scroll('left')}
          className="block text-4xl text-blue-500 hover:text-purple-500 mr-4 bg-transparent border-none outline-none"
          aria-label="Scroll left"
        >
          &#8592;
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="
            hide-scrollbar flex overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            px-0 sm:px-4 py-4
            space-x-0 sm:space-x-6
            w-full
          "
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="
                min-w-full w-full                /* mobile: one full card per viewport */
                sm:min-w-[370px] sm:max-w-[370px] sm:w-auto   /* desktop sizes */
                h-auto sm:h-[250px]
                max-h-[80vh]
                snap-center
                flex-shrink-0 bg-white dark:bg-gray-800 
                rounded-xl overflow-hidden transform transition hover:scale-105
              "
              style={{
                boxShadow:
                  '0 10px 25px rgba(96, 165, 250, 0.25), 0 6px 10px rgba(168, 85, 247, 0.2)',
              }}
            >
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow (now visible on mobile too) */}
        <button
          onClick={() => scroll('right')}
          className="block text-4xl text-blue-500 hover:text-purple-500 ml-4 bg-transparent border-none outline-none"
          aria-label="Scroll right"
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
