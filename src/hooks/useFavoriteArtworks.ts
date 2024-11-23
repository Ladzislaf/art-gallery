import { useEffect, useState } from 'react';

import { Artwork } from '../utils/types';

export default function useFavoriteArtworks(favoritesIds: number[]) {
	const [favorites, setFavorites] = useState<Artwork[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const favoritesStorage = JSON.parse(sessionStorage.getItem('favorites') || '[]');
		setFavorites(favoritesStorage);
		setIsLoading(false);
	}, [favoritesIds]);

	return { favorites, isLoading };
}
