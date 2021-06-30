import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext'
import Recipe from '../components/Recipe';

const RecipeList = () => {

    //Fetch recipes
    const { recipes } = useContext(RecipesContext);
    

    return ( 
        <div className='row mt-5'>
            { recipes.map(recipe => (
                <Recipe
                key={recipe.idDrink}
                recipe={recipe}
                />
            ))}
        </div>
     );
}
 
export default RecipeList
