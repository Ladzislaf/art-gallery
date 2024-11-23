import { useContext } from 'react';

import ArtworksList from '../components/ArtworksList/ArtworksList';
import Article from '../components/ui/Article';

import useFavoriteArtworks from '../hooks/useFavoriteArtworks';
import FavoritesContext, { FavoritesContextType } from '../utils/FavoritesContext';

export function Favoritespage() {
	const { favoriteIds } = useContext(FavoritesContext) as FavoritesContextType;
	const { favorites, isLoading } = useFavoriteArtworks(favoriteIds);

	return (
		<>
			<h1>Here are your Favorites</h1>

			<Article header="Your favorites list" subheader="Saved by you">
				<ArtworksList artworks={favorites} isLoading={isLoading} cardType="mini" />
			</Article>
		</>
	);
}
