import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import RecipeList from "./components/RecipeList";

import CategoriesProvider from "./context/CategoriesContext";
import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <RecipeList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
