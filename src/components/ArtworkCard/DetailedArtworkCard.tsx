import { useContext } from 'react';

import styles from '@components/ArtworkCard/ArtworkCard.module.scss';

import FavoritesButton from '@components/ui/FavoritesButton';
import ArtworkImage from '@components/ui/ArtworkImage';
import DetailedArtworkCardSkeleton from '@components/ArtworkCard/DetailedArtworkCardSkeleton';

import { Artwork } from '@utils/types';
import FavoritesContext, { FavoritesContextType } from '@utils/FavoritesContext';

type DetailedArtworkCardProps = {
	artwork: Artwork | null;
	isLoading: boolean;
	isError: boolean;
};

export default function DetailedArtworkCard({ artwork, isLoading, isError }: DetailedArtworkCardProps) {
	const { favoriteIds, addFavorite, removeFavorite } = useContext(FavoritesContext) as FavoritesContextType;

	if (isError) {
		return <DetailedArtworkCardSkeleton message="Something went wrong" />;
	}

	if (isLoading || !artwork) {
		return <DetailedArtworkCardSkeleton />;
	}

	return (
		<div className={styles.detailsContainer}>
			<span>
				<FavoritesButton
					onClick={favoriteIds.includes(artwork.id) ? () => removeFavorite(artwork) : () => addFavorite(artwork)}
					isFavorite={favoriteIds.includes(artwork.id)}
				/>
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
