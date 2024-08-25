// context/FavoriteContext.js
"use client"
import { createContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteImageIds, setFavoriteImageIds] = useState([]);

  const addFavorite = (imageId) => {
    setFavoriteImageIds((prevFavorites) => [...prevFavorites, imageId]);
  };

  const removeFavorite = (imageId) => {
    setFavoriteImageIds((prevFavorites) => prevFavorites.filter((id) => id !== imageId));
  };

  console.log("favoriteImageIds from FavoriteContext: ", favoriteImageIds);

  return (
    <FavoriteContext.Provider value={{ favoriteImageIds, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;