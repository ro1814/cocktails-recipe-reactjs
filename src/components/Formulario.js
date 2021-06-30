import React, { useContext, useState } from "react";
import { CategoriesContext } from '../context/CategoriesContext';
import {RecipesContext } from '../context/RecipesContext';

const Fomulario = () => {

    const [ search, saveSearch ] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoriesContext);
    const { searchRecipes, saveConsult } = useContext(RecipesContext);

    //Function to read content
    const getRecipeData = e => {
        saveSearch({
        ...search,
        [e.target.name] : e.target.value
    })
}
   

  return (
    <form 
    className="col-12"
    onSubmit={e => { 
    e.preventDefault();
    searchRecipes(search)
    saveConsult(true)
    }}
    >
      <fieldset className="text-center">
        <legend>Search Cocktails by category or ingedient.</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Search by Ingredient"
            onChange={getRecipeData}
          />
        </div>

        <div className='col-md-4'>
            <select 
            className="form-control"
            name='category'
            onChange={getRecipeData}>
                <option value="">--  Select Category  --</option>
                {categories.map(category => (
                    <option
                    key={category.strCategory}
                    value={category.strCategory}
                    >{category.strCategory}
                    </option>
                ))}
            </select>
        </div>

        <div className='col-md-4'>
            <input
            type="submit"
            className='btn btn-block btn-primary'
            value='Search Cocktails recipes.'
            />
        </div>

      </div>
    </form>
  );
};

export default Fomulario;
