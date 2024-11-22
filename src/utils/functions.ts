export const handleToggleFavorite = (artworkId: number) => {
	const favorites: number[] = JSON.parse(sessionStorage.getItem('favorites') || '[]');

	if (favorites.includes(artworkId)) {
		sessionStorage.setItem('favorites', JSON.stringify(favorites.filter((id) => id !== artworkId)));
	} else {
		sessionStorage.setItem('favorites', JSON.stringify([...favorites, artworkId]));
	}
};
