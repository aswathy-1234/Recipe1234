// import React, { useState } from 'react';
// import './RecipeSearch.css'; // Import the CSS file for styling

// const RecipeSearch = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [error, setError] = useState(null);
//   const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch(`${API_URL}${query}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data); // Log the full response to check its structure

//       if (data && data.meals) {
//         setRecipes(data.meals);
//         setError(null);
//       } else {
//         setError('No recipes found');
//         setRecipes([]);
//       }
//     } catch (error) {
//       console.error('Error fetching the recipes:', error);
//       setError('An error occurred while fetching the recipes');
//       setRecipes([]);
//     }
//   };

//   const getIngredients = (recipe) => {
//     let ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       if (recipe[`strIngredient${i}`]) {
//         ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
//       }
//     }
//     return ingredients;
//   };

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
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
//       <div className="recipes-container">
//         {!selectedRecipe && recipes.map((recipe, index) => (
//           <div key={index} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
//             <h2>{recipe.strMeal}</h2>
//             <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
//           </div>
//         ))}
//         {selectedRecipe && (
//           <div className="recipe-details">
//             <h2>{selectedRecipe.strMeal}</h2>
//             <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} className="recipe-image" />
//             <h3>Ingredients</h3>
//             <ul>
//               {getIngredients(selectedRecipe).map((ingredient, idx) => (
//                 <li key={idx}>{ingredient}</li>
//               ))}
//             </ul>
//             <h3>Preparation Method</h3>
//             <p>{selectedRecipe.strInstructions}</p>
//             <button onClick={() => setSelectedRecipe(null)} className="back-button">Back to search results</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecipeSearch;
// import React, { useState } from 'react';
// import './RecipeSearch.css'; // Import the CSS file for styling

// const RecipeSearch = () => {
//   const [query, setQuery] = useState('');
//   const [recipe, setRecipe] = useState(null);
//   const [error, setError] = useState(null);
//   const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

//   const fetchRecipe = async () => {
//     try {
//       const response = await fetch(`${API_URL}${query}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data); // Log the full response to check its structure

//       if (data && data.meals) {
//         setRecipe(data.meals[0]);
//         setError(null);
//       } else {
//         setError('No recipes found');
//         setRecipe(null);
//       }
//     } catch (error) {
//       console.error('Error fetching the recipe:', error);
//       setError('An error occurred while fetching the recipe');
//       setRecipe(null);
//     }
//   };

//   const getIngredients = (recipe) => {
//     let ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       if (recipe[`strIngredient${i}`]) {
//         ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
//       }
//     }
//     return ingredients;
//   };

//   return (
//     <div className="recipe-search-container">
//       <h1>Recipe Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter recipe name"
//         className="search-input"
//       />
//       <button onClick={fetchRecipe} className="search-button">Search</button>
//       {error && <p className="error-message">{error}</p>}
//       {recipe && (
//         <div className="recipe-details">
//           <h2>{recipe.strMeal}</h2>
//           <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
//           <h3>Ingredients</h3>
//           <ul>
//             {getIngredients(recipe).map((ingredient, idx) => (
//               <li key={idx}>{ingredient}</li>
//             ))}
//           </ul>
//           <h3>Preparation Method</h3>
//           <p>{recipe.strInstructions}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RecipeSearch = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//       const data = await response.json();

//       if (data.meals) {
//         setRecipes(data.meals);
//         setError(null);
//       } else {
//         setError('No recipes found');
//         setRecipes([]);
//       }
//     } catch {
//       setError('An error occurred while fetching recipes');
//       setRecipes([]);
//     }
//   };

//   const handleRecipeClick = (id) => {
//     navigate(`/recipe/${id}`);
//   };

//   return (
//     <div>
//       <h1>Recipe Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter ingredient"
//       />
//       <button onClick={fetchRecipes}>Search</button>
//       {error && <p>{error}</p>}
//       <div>
//         {recipes.map((recipe) => (
//           <div key={recipe.idMeal} onClick={() => handleRecipeClick(recipe.idMeal)}>
//             <h2>{recipe.strMeal}</h2>
//             <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100px', height: '100px' }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeSearch;
// import React, { useState } from 'react';
// import RecipeList from './RecipeList';
// import RecipeDetails from './RecipeDetails';
// import './RecipeSearch.css'; // Import the CSS file for styling

// const RecipeSearch = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [error, setError] = useState(null);
//   const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch(`${API_URL}${query}`, { method: 'GET' });

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
//       {!selectedRecipe ? (
//         <RecipeList
//           recipes={recipes}
//           onRecipeClick={(recipe) => setSelectedRecipe(recipe)}
//         />
//       ) : (
//         <RecipeDetails
//           recipe={selectedRecipe}
//           onBack={() => setSelectedRecipe(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default RecipeSearch;
import React, { useState } from 'react';
import RecipeList from './RecipeList'; // Component to show the list of recipes
import RecipeDetails from './RecipeDetails'; // Component to show details of a single recipe
import './RecipeSearch.css'; // CSS for styling

const RecipeSearch = () => {
  // State to hold the search query
  const [query, setQuery] = useState('');
  // State to hold the fetched recipes
  const [recipes, setRecipes] = useState([]);
  // State to hold the selected recipe's details
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // State to hold any error messages
  const [error, setError] = useState(null);

  // Function to fetch recipes from the API
  const fetchRecipes = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the response JSON data
      const data = await response.json();
      // Check if there are meals in the data
      if (data && data.meals) {
        setRecipes(data.meals); // Set the recipes state with fetched meals
        setError(null); // Clear any previous errors
      } else {
        setError('No recipes found'); // Set error message if no recipes are found
        setRecipes([]); // Clear recipes state
      }
    } catch (error) {
      setError('An error occurred while fetching the recipes'); // Set error message if there's an exception
      setRecipes([]); // Clear recipes state
    }
  };

  return (
    <div className="recipe-search-container">
      <h1>Recipe Search</h1>
      {/* Input field for the user to type the ingredient they want to search */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state as user types
        placeholder="Enter ingredient"
        className="search-input"
      />
      {/* Button to trigger the recipe search */}
      <button onClick={fetchRecipes} className="search-button">Search</button>
      {/* Display error message if there's any */}
      {/* <p className="error-message">{error || 'No errors'}</p> */}
      {/* Conditionally render RecipeList or RecipeDetails based on whether a recipe is selected */}
      {!selectedRecipe ? (
        <RecipeList
          recipes={recipes} // Pass the recipes to RecipeList component
          onRecipeClick={(recipe) => setSelectedRecipe(recipe)} // Set the selected recipe when a recipe is clicked
        />
      ) : (
        <RecipeDetails
          recipe={selectedRecipe} // Pass the selected recipe to RecipeDetails component
          onBack={() => setSelectedRecipe(null)} // Clear the selected recipe when the back button is clicked
        />
      )}
    </div>
  );
};

export default RecipeSearch;







