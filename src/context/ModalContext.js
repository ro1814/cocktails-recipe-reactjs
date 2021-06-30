import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

//Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //Provider's State
    const [ idrecipe, saveIdRecipe ] = useState(null);

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