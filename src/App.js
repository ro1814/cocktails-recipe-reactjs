import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import RecipeList from './components/RecipeList';

import CategoriesProvider from './context/CategoriesContext'
import RecipesProvider from './context/RecipesContext';


function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
      <Header/>
      <div className='container mt-5'>
        <div className='row'>
        <Formulario/>
        </div>
        <RecipeList/>
        
      </div>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
