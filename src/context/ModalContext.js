import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

//Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //Provider's State
    const [ idrecipe, saveIdRecipe ] = useState(null);
    const [ recipe, saveRecipe ] = useState({});

    //Once we have the Recipe call API
    useEffect( () => {
        const getRecipe = async () => {
            if(!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

            const result = await axios.get(url)

            saveRecipe(result.data.drinks[0]);

        }
        getRecipe();
    }, [idrecipe]);

    return (
        <ModalContext.Provider
        value={{
            saveIdRecipe
        }}
        >
            { props.children }
        </ModalContext.Provider>
    );
}

export default ModalProvider;