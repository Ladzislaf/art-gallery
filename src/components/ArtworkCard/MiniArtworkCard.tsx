import styles from './ArtworkCard.module.scss';
import { Artwork } from '../../utils/types';
import FavoritesButton from '../ui/FavoritesButton';
import ArtworkImage from '../ui/ArtworkImage';

export default function MiniArtworkCard({
	artwork,
	onToggleFavourite,
}: {
	artwork: Artwork | null;
	onToggleFavourite?: (artworkId: number) => void;
}) {
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

			<FavoritesButton />
		</div>
	);
}
