import { Artwork } from './types';

export const toggleFavoriteStorage = (artwork: Artwork | null) => {
	if (artwork === null || artwork.id === -1) return;

	const favorites: Artwork[] = JSON.parse(sessionStorage.getItem('favorites') || '[]');
	const existingIndex = favorites.findIndex((fav) => fav.id === artwork.id);

	if (existingIndex === -1) {
		sessionStorage.setItem('favorites', JSON.stringify([...favorites, artwork]));
	} else {
		sessionStorage.setItem('favorites', JSON.stringify(favorites.filter((_, index) => index !== existingIndex)));
	}
};
