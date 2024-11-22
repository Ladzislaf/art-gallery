import styles from './ArtworkCard.module.scss';

import FavoritesButton from '../ui/FavoritesButton';
import ArtworkImage from '../ui/ArtworkImage';

import { handleToggleFavorite } from '../../utils/functions';
import { Artwork } from '../../utils/types';

export default function ArtworkCard({ artwork }: { artwork: Artwork | null }) {
	if (artwork === null) {
		artwork = {
			id: -1,
			title: 'Title',
			artist_title: 'Artist',
			is_public_domain: true,
			image_id: '',
		};
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

				<FavoritesButton onClick={() => handleToggleFavorite(artwork)} />
			</div>
		</div>
	);
}
