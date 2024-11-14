import React from 'react';

import { MenuItem } from '../types/MenuToolsDTO';

interface CardMenuProps extends MenuItem {
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const CardMenu: React.FC<CardMenuProps> = ({ iconSrc, title, description, isFavorite, onFavoriteToggle }) => (
  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
    <img src={iconSrc} alt="icon" className="w-8 h-8 mr-4" />
    <div>
      <h2 className="font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
    <button onClick={onFavoriteToggle} className="ml-auto text-gray-400 hover:text-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
        <path d={isFavorite ? "M3.612 15.443c-.387.198-.824-.149-.746-.592l.73-4.283L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696L7.538.792a.513.513 0 01.924 0l2.184 4.327 4.898.696c.441.062.612.63.283.95l-3.423 3.803.73 4.283c.078.443-.359.79-.746.592L8 13.187l-3.612 2.256z" : "M8 1l2.45 4.95L15 6l-3.6 3.5L12 15 8 12.5 4 15l1.6-5.5L2 6l4.55-.05L8 1z"} />
      </svg>
    </button>
  </div>
);

export default CardMenu;
