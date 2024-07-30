// import React from 'react';

// const RecipeList = ({ recipes, onRecipeClick }) => {
//   return (
//     <div className="recipes-container">
//       {recipes.map((recipe, index) => (
//         <div
//           key={index}
//           className="recipe-card"
//           onClick={() => onRecipeClick(recipe)}
//         >
//           <h2>{recipe.strMeal}</h2>
//           <img
//             src={recipe.strMealThumb}
//             alt={recipe.strMeal}
//             className="recipe-image"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
// import React from 'react';


// const RecipeList = ({ recipes, onRecipeClick }) => {
//   return (
//     <div className="recipes-container">
//       {recipes.map((recipe, index) => (
//         <div
//           key={index}
//           className="recipe-card"
//           onClick={() => onRecipeClick(recipe)}
//         >
//           <h2>{recipe.strMeal}</h2>
//           <img
//             src={recipe.strMealThumb}
//             alt={recipe.strMeal}
//             className="recipe-image"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
import React from 'react';
// import './RecipeList.css';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipes-container">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="recipe-card"
          onClick={() => onRecipeClick(recipe)}
        >
          <h2>{recipe.strMeal}</h2>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-image"
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
