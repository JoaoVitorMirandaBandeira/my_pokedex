export const isIdInFavorites = (id) => {
    const favoritesJSON = localStorage.getItem('favorites');
    const favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];
    return favorites.includes(id);
  }