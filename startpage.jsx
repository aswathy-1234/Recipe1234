// // src/components/StartPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './StartPage.css'; // Create this CSS file for styling if needed

// const StartPage = () => {
//   const navigate = useNavigate();

//   const handleStartClick = () => {
//     navigate('/Recipisearch');
//   };

//   return (
//     <div className="start-page">
//       <h1>Welcome to the Recipe Finder</h1>
//       <button onClick={handleStartClick} className="start-button">Start</button>
//     </div>
//   );
// };

// export default StartPage;
import React, { useState } from 'react';
import RecipeSearch from './Recipisearch';

const StartPage = () => {
  const [currentPage, setCurrentPage] = useState('start');

  const handleStartClick = () => {
    setCurrentPage('Recipisearch');
  };

  return (
    <div className="start-page-container">
      <h1>Welcome to Recipe Search</h1>
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
      {currentPage === 'Recipisearch' ? (
        <RecipeSearch />
      ) : (
        <div />
      )}
    </div>
  );
};

export default StartPage;
