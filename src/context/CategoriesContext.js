import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

//Create the context

export const CategoriesContext = createContext();

// Provider is where functions and states are found
const CategoriesProvider = (props) => {

    //Create the Context State
    const [categories, saveCategories] = useState([]);

    //Call to API
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios.get(url);

            saveCategories(categories.data.drinks)
        }
        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value = {{
            categories
        }}>
            
            {props.children}
        </CategoriesContext.Provider>
        
    )
}

export default CategoriesProvider;