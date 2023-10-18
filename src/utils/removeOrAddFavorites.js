import { isIdInFavorites } from "./isIdInFavorites";
const addToFavorites = (id, favorites) => {
  favorites.push(id);
  return favorites;
}

const removeFromFavorites = (id, favorites) => {
  const index = favorites.indexOf(id);
  if (index !== -1) {
    favorites.splice(index, 1);
  }
  return favorites;
}

export const removeOrAddFavorites = (id) => {
  const favoritesJSON = localStorage.getItem('favorites');
  const favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];
  const isIdInList = isIdInFavorites(id);

  if (isIdInList) {
    removeFromFavorites(id, favorites);
  } else {
    addToFavorites(id, favorites);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}