import { createContext, useCallback, useEffect, useState } from 'react';

import { Artwork } from './types';
import { toggleFavoriteStorage } from './functions';

export type FavoritesContextType = {
	favoriteIds: number[];
	addFavorite: (artwork: Artwork) => void;
	removeFavorite: (artwork: Artwork) => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesContextProvider({ children }: { children: React.ReactNode }) {
	const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

	useEffect(() => {
		const favoritesStorage = JSON.parse(sessionStorage.getItem('favorites') || '[]');
		if (favoritesStorage.length > 0) {
			setFavoriteIds(favoritesStorage.map((fav: Artwork) => fav.id));
		}
	}, []);

	const addFavorite = useCallback((artwork: Artwork) => {
		setFavoriteIds((prev) => [...prev, artwork.id]);
		toggleFavoriteStorage(artwork);
	}, []);

	const removeFavorite = useCallback((artwork: Artwork) => {
		setFavoriteIds((prev) => prev.filter((id) => id !== artwork.id));
		toggleFavoriteStorage(artwork);
	}, []);

	return (
		<FavoritesContext.Provider value={{ favoriteIds, addFavorite, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
