import { useEffect, useState } from 'react';
import { Artwork } from '../utils/types';

export default function useFavoriteArtworks() {
	const [favorites, setFavorites] = useState<Artwork[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const favoritesStorage = JSON.parse(sessionStorage.getItem('favorites') || '[]');
		favoritesStorage.length > 0 && setFavorites(favoritesStorage);
		setIsLoading(false);
	}, []);

	const removeFavorite = (id: number) => {
		setFavorites((prev) => (prev === null ? null : prev.filter((fav) => fav.id !== id)));
	};

	return { favorites, isLoading, removeFavorite };
}
