import styles from './ArtworksList.module.scss';

import ArtworkCard from '../ArtworkCard/ArtworkCard';
import MiniArtworkCard from '../ArtworkCard/MiniArtworkCard';

import { Artwork } from '../../utils/types';

type ArtworksListProps = {
	artworks: Artwork[] | null;
	isLoading: boolean;
	isError?: boolean;
	cardType?: 'full' | 'mini';
	onCardClick?: (id: number) => void;
};

export default function ArtworksList({
	artworks,
	isLoading,
	isError,
	cardType = 'full',
	onCardClick,
}: ArtworksListProps) {
	if (isError) {
		return <h1>Something went wrong</h1>;
	}

	if (isLoading) {
		return (
			<div className={styles.container}>
				{cardType === 'mini' ? <MiniArtworkCard artwork={null} /> : <ArtworkCard artwork={null} />}
				{cardType === 'mini' ? <MiniArtworkCard artwork={null} /> : <ArtworkCard artwork={null} />}
				{cardType === 'mini' ? <MiniArtworkCard artwork={null} /> : <ArtworkCard artwork={null} />}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{artworks?.map((artwork: Artwork) => {
				return cardType === 'mini' ? (
					<MiniArtworkCard artwork={artwork} key={artwork.id} onCardClick={onCardClick} />
				) : (
					<ArtworkCard artwork={artwork} key={artwork.id} />
				);
			})}
		</div>
	);
}
