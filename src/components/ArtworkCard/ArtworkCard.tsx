import { useContext } from 'react';

import styles from './ArtworkCard.module.scss';

import FavoritesButton from '../ui/FavoritesButton';
import ArtworkImage from '../ui/ArtworkImage';

import { Artwork } from '../../utils/types';
import FavoritesContext, { FavoritesContextType } from '../../utils/FavoritesContext';

export default function ArtworkCard({ artwork }: { artwork: Artwork | null }) {
	const { favoriteIds, addFavorite, removeFavorite } = useContext(FavoritesContext) as FavoritesContextType;

	if (artwork === null) {
		return <h1>loading</h1>;
	}

	return (
		<div className={styles.container}>
			<ArtworkImage imageId={artwork?.image_id} linkTo={`/details/${artwork?.id}`} />

			<div className={styles.infoContainer}>
				<div>
					<p>{artwork?.title}</p>
					<p style={{ color: '#F17900' }}>{artwork?.artist_title}</p>
					<p>
						<strong>{artwork?.is_public_domain ? 'Public' : 'Private'}</strong>
					</p>
				</div>

				<FavoritesButton
					onClick={favoriteIds.includes(artwork.id) ? () => removeFavorite(artwork) : () => addFavorite(artwork)}
					isFavorite={favoriteIds.includes(artwork.id)}
				/>
			</div>
		</div>
	);
}
