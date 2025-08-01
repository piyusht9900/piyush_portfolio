import React, { useEffect } from 'react';

const Education = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.edu-card');
    const handleScroll = () => {
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
          card.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="education"
      className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight">
        Education
      </h2>

      {[{
        logo: '/logos/mgm.png',
        title: 'Bachelor of Engineering in Computer Science',
        subtitle: 'University of Mumbai, MGM College of Engineering and Technology, Kamothe',
        date: 'Dec 2021 – May 2025',
        score: 'CGPA: 8.11',
      }, {
        logo: '/logos/ues.webp',
        title: 'H.S.C in Science',
        subtitle: 'Maharashtra State Board, U.E.S Jr College Uran',
        date: 'July 2019 – March 2021',
        score: 'Score: 87.17%',
      }, {
        logo: '/logos/ies_logo.png',
        title: 'Secondary (X)',
        subtitle: 'Maharashtra State Board, I.E.S JNPT Secondary School, Sheva',
        date: 'June 2015 – Feb 2018',
        score: 'Score: 88.40%',
      }].map((item, index) => (
        <div
          key={index}
          className="edu-card bg-white dark:bg-gray-800 text-left rounded-lg p-6 mb-8 mx-auto max-w-3xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:opacity-90"
          style={{
            boxShadow: '0 10px 25px rgba(96, 165, 250, 0.25), 0 6px 10px rgba(168, 85, 247, 0.2)',
          }}
        >
          <img
            src={item.logo}
            alt="Education Logo"
            className="edu-logo mb-4 w-24 h-24 object-contain"
          />
          <div className="edu-content">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{item.subtitle}</p>
            <div className="edu-details text-gray-700 dark:text-gray-400 mt-2">
              <span>{item.date}</span>
              <br />
              <span className="edu-score font-medium text-blue-500">{item.score}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
