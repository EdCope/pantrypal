import React, { useState } from 'react';
import axios from 'axios';
import { RecipeList } from './recipeList'


export const SearchRecipe = () => {
  const [recipes, setRecipes] = useState('');
  const getListValue = (e) => {
    //   getListValue function gets all of the ingredients in the ingredients list
    e.preventDefault();
    const ingredientsList = document
      .getElementById('ingredientsList')
      .querySelectorAll('li');

    const array = [];
    ingredientsList.forEach((ingredient) => array.push(ingredient.innerText));

    // Url for searching the API - https://developer.edamam.com/edamam-docs-recipe-api
    const searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${array.join(
      '%20'
    )}&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc`;

    // axios call to get the url and setting the recipe state with the returned data
    axios.get(searchUrl).then((res) => {
      const recipes = res.data;
      setRecipes(recipes);
    });
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-success mb-3'
        id='recipe-search'
        onClick={getListValue}
      >
        Search For Recipe
      </button>

      <RecipeList recipes={recipes} />
    </div>
  );
};