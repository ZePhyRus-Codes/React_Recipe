import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.imageUrl} alt={recipe.name} />
      <p>{recipe.description}</p>
      <div className="instructions">
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
    </div>
  );
};
