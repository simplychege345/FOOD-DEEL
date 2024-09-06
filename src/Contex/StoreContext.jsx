// src/Contex/StoreContext.js

// src/Contex/StoreContext.js

import React, { createContext, useState, useEffect } from 'react';
import { fetchFoodItems } from '../Components/services/foodService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});

    // Fetch food items on component mount
    useEffect(() => {
        const getFoodItems = async () => {
            try {
                const data = await fetchFoodItems();
                setFoodList(data);
            } catch (error) {
                console.error('Failed to fetch food items:', error);
            }
        };

        getFoodItems();
    }, []);

    // Add item to cart
    const addToCart = (id) => {
        setCartItems(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[id]) {
                if (newCart[id] === 1) {
                    delete newCart[id];
                } else {
                    newCart[id] -= 1;
                }
            }
            return newCart;
        });
    };

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    return (
        <StoreContext.Provider value={{ food_list, cartItems, addToCart, removeFromCart, getTotalCartAmount }}>
            {children}
        </StoreContext.Provider>
    );
};
