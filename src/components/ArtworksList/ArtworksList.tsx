import styles from '@components/ArtworksList/ArtworksList.module.scss';

import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import MiniArtworkCard from '@components/ArtworkCard/MiniArtworkCard';
import ArtworkCardSkeleton from '@components/ArtworkCard/ArtworkCardSkeleton';
import MiniArtworkCardSkeleton from '@/components/ArtworkCard/MiniArtworkCardSkeleton';

import { Artwork } from '@utils/types';

type ArtworksListProps = {
	artworks: Artwork[] | null;
	isLoading: boolean;
	isError?: boolean;
	cardType?: 'full' | 'mini';
};

export default function ArtworksList({ artworks, isLoading, isError, cardType = 'full' }: ArtworksListProps) {
	if (isError) {
		return (
			<div className={styles.container}>
				{cardType === 'mini' ? (
					<MiniArtworkCardSkeleton message="Something went wrong" />
				) : (
					<ArtworkCardSkeleton message="Something went wrong" />
				)}
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className={styles.container}>
				{cardType === 'mini' ? <MiniArtworkCardSkeleton /> : <ArtworkCardSkeleton />}
				{cardType === 'mini' ? <MiniArtworkCardSkeleton /> : <ArtworkCardSkeleton />}
				{cardType === 'mini' ? <MiniArtworkCardSkeleton /> : <ArtworkCardSkeleton />}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{artworks?.length === 0 &&
				(cardType === 'mini' ? (
					<MiniArtworkCardSkeleton message="Artworks not found" />
				) : (
					<ArtworkCardSkeleton message="Artworks not found" />
				))}

			{artworks?.map((artwork: Artwork) => {
				return cardType === 'mini' ? (
					<MiniArtworkCard artwork={artwork} key={artwork.id} />
				) : (
					<ArtworkCard artwork={artwork} key={artwork.id} />
				);
			})}
		</div>
	);
}
