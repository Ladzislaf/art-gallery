import styles from './ArtworkCard.module.scss';

import FavoritesButton from '../ui/FavoritesButton';
import ArtworkImage from '../ui/ArtworkImage';

import { handleToggleFavorite } from '../../utils/functions';
import { Artwork } from '../../utils/types';

export default function MiniArtworkCard({
	artwork,
	onCardClick,
}: {
	artwork: Artwork | null;
	onCardClick?: (id: number) => void;
}) {
	const handleCardClick = () => {
		if (artwork !== null) {
			handleToggleFavorite(artwork);
			onCardClick?.(artwork.id);
		}
	};

	return (
		<div className={styles.miniCardContainer}>
			<ArtworkImage imageId={artwork?.image_id} linkTo={`/details/${artwork?.id}`} />

			<span>
				<p className={styles.title}>{artwork?.title}</p>
				<p className={styles.artist}>{artwork?.artist_title}</p>
				{artwork?.is_public_domain !== undefined && (
					<p>
						<strong>{artwork.is_public_domain ? 'Public' : 'Private'}</strong>
					</p>
				)}
			</span>

			<FavoritesButton onClick={handleCardClick} />
		</div>
	);
}
