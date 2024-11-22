import ArtworksList from '../components/ArtworksList/ArtworksList';
import Article from '../components/ui/Article';

import useFavoriteArtworks from '../hooks/useFavoriteArtworks';

export function Favoritespage() {
	const { favorites, isLoading, removeFavorite } = useFavoriteArtworks();

	return (
		<>
			<h1>Here are your Favorites</h1>

			<Article header='Your favorites list' subheader='Saved by you'>
				<ArtworksList artworks={favorites} isLoading={isLoading} cardType='mini' onCardClick={removeFavorite} />
			</Article>
		</>
	);
}
