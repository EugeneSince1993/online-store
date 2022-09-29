import { RootState } from '../store';

export const selectFavorites = (state: RootState) => state.favorites;

export const selectFavoriteItemById = (id: string) => (state: RootState) => {
  return state.favorites.items.find((obj) => obj.id === id);
};
