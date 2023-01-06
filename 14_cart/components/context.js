import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

/* Setting the initial state of the app. */
const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
};

/**
 * The AppProvider function is a React component that provides the state and dispatch functions to all
 * of its child components.
 * @returns The AppContext.Provider is being returned.
 */
const AppProvider = ({ children }) => {
    /* Creating a new state object and a dispatch function. */
    const [state, dispatch] = useReducer(reducer, initialState);

    /**
     * The clearCart function is a function that takes no arguments and returns an object with a type
     * property set to CLEAR_CART.
     */
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    /**
     * The remove function takes an id as an argument and dispatches an action with the type of REMOVE
     * and the payload of the id.
     * @param id - The id of the item to be removed
     */
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id });
    };

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id });
    };

    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
    };

    /**
     * When the component mounts, dispatch a loading action, then fetch the data, then dispatch a
     * display action with the data as the payload.
     */
    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
    };

    useEffect(() => {
        fetchData();
    }, []);

    /* A React hook that is used to perform side effects. It is called after every render. */
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
                toggleAmount,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

//* make sure use
/**
 * This function returns the value of the AppContext object, which is the global state object.
 * @returns The useContext hook is being used to return the AppContext.
 */
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
