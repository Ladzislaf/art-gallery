import { Artwork } from '../../utils/types';
import FavoritesButton from '../ui/FavoritesButton';
import ArtworkImage from '../ui/ArtworkImage';
import { handleToggleFavorite } from '../../utils/functions';

import styles from './ArtworkCard.module.scss';

export default function DetailedArtworkCard({ artwork }: { artwork?: Artwork }) {
	return (
		<div className={styles.detailsContainer}>
			<span>
				{artwork?.id && <FavoritesButton onClick={() => handleToggleFavorite(artwork.id)} />}
				<ArtworkImage imageId={artwork?.image_id} />
			</span>
			<div>
				<div>
					<h2>{artwork?.title}</h2>
					<h3>
						<span>{artwork?.artist_title}</span>
					</h3>
					<h4>{artwork?.date_display}</h4>
				</div>
				<div>
					<h2>Overview</h2>
					<p>
						<span>About artist:</span> {artwork?.artist_display}
					</p>
					{artwork?.is_public_domain !== undefined && <p>{artwork.is_public_domain ? 'Public' : 'Private'}</p>}
				</div>
			</div>
		</div>
	);
}
