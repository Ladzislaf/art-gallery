import { Artwork } from '../../utils/types';
import ArtworkCard from '../ArtworkCard/ArtworkCard';
import MiniArtworkCard from '../ArtworkCard/MiniArtworkCard';

import styles from './ArtworksList.module.scss';

type ArtworksListProps = {
	artworks: Artwork[] | null;
	isLoading: boolean;
	isError: boolean;
	cardType?: 'full' | 'mini';
};

export default function ArtworksList({ artworks, isLoading, isError, cardType = 'full' }: ArtworksListProps) {
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
					<MiniArtworkCard artwork={artwork} key={artwork.id} />
				) : (
					<ArtworkCard artwork={artwork} key={artwork.id} />
				);
			})}
		</div>
	);
}
