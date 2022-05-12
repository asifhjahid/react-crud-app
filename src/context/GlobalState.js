import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    users:[
        {id:1, name:'Asif'},
        {id:2, name:'Hasan'},
        {id:3, name:'Jahid'}
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider =({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    const addUser = (user)=>{
        dispatch({
            type:'ADD_USER',
            payload:user
        })
    }
    const removeUser = (id)=>{
        dispatch({
            type:'REMOVE_USER',
            payload:id 
        })
    }

    return(
        <GlobalContext.Provider value={{
            users:state.users,
            removeUser,
            addUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
