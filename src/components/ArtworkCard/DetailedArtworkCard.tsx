import styles from './ArtworkCard.module.scss';

import FavoritesButton from '../ui/FavoritesButton';
import ArtworkImage from '../ui/ArtworkImage';

import { Artwork } from '../../utils/types';
import { handleToggleFavorite } from '../../utils/functions';

type DetailedArtworkCardProps = {
	artwork: Artwork | null;
	isLoading: boolean;
	isError: boolean;
};

export default function DetailedArtworkCard({ artwork, isLoading, isError }: DetailedArtworkCardProps) {
	if (isError) {
		return <h1>Something went wrong</h1>;
	}

	if (isLoading) {
		artwork = {
			id: -1,
			title: 'Loading...',
			image_id: '',
			artist_title: 'Loading...',
			is_public_domain: true,
			date_display: 'Loading...',
			artist_display: 'Loading...',
		};
	}

	return (
		<div className={styles.detailsContainer}>
			<span>
				<FavoritesButton onClick={() => handleToggleFavorite(artwork)} />
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
