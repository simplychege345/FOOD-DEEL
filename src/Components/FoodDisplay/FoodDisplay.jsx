// src/components/FoodDisplay/FoodDisplay.js

import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Contex/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    // Filter food items based on the category
    const filteredFoodList = food_list.filter(item =>
        category === 'All' || category === item.category
    );

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {filteredFoodList.map(item => (
                    <FoodItem
                        key={item.id}  // Assuming 'id' is the unique identifier
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
