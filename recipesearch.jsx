// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import RecipeList from './RecipeList';
// import './RecipeSearch.css';

// const RecipeSearch = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       if (data && data.meals) {
//         setRecipes(data.meals);
//         setError(null);
//       } else {
//         setError('No recipes found');
//         setRecipes([]);
//       }
//     } catch (error) {
//       setError('An error occurred while fetching the recipes');
//       setRecipes([]);
//     }
//   };

//   const handleRecipeClick = (recipe) => {
//     navigate(`/recipe/${recipe.idMeal}`, { state: { recipe } });
//   };

//   return (
//     <div className="recipe-search-container">
//       <h1>Recipe Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter ingredient"
//         className="search-input"
//       />
//       <button onClick={fetchRecipes} className="search-button">Search</button>
//       {error && <p className="error-message">{error}</p>}
//       <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
//     </div>
//   );
// };

// export default RecipeSearch;
