import { useContext } from 'react';

import styles from '@components/ArtworkCard/ArtworkCard.module.scss';

import FavoritesButton from '@components/ui/FavoritesButton';
import ArtworkImage from '@components/ui/ArtworkImage';

import { Artwork } from '@utils/types';
import FavoritesContext, { FavoritesContextType } from '@utils/FavoritesContext';

export default function MiniArtworkCard({ artwork }: { artwork: Artwork }) {
	const { favoriteIds, addFavorite, removeFavorite } = useContext(FavoritesContext) as FavoritesContextType;

	return (
		<div className={styles.miniCardContainer}>
			<ArtworkImage imageId={artwork?.image_id} linkTo={`/details/${artwork?.id}`} />

			<span>
				<p>{artwork?.title || 'Unknown Title'}</p>
				<p className={styles.artist}>{artwork?.artist_title || 'Unknown Artist'}</p>
				{artwork?.is_public_domain !== undefined && (
					<p>
						<strong>{artwork.is_public_domain ? 'Public' : 'Private'}</strong>
					</p>
				)}
			</span>

			<FavoritesButton
				onClick={favoriteIds.includes(artwork.id) ? () => removeFavorite(artwork) : () => addFavorite(artwork)}
				isFavorite={favoriteIds.includes(artwork.id)}
			/>
		</div>
	);
}
