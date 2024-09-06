import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='explore-menu-title'>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes...
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
            // Removed the onClick handler to make items non-clickable
          >
            <img
              className='explore-menu-item-image'
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className='explore-menu-item-name'>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className='explore-menu-divider' />
    </div>
  );
};

export default ExploreMenu;
