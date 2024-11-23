import { useParams } from 'react-router-dom';

import DetailedArtworkCard from '@components/ArtworkCard/DetailedArtworkCard';
import Article from '@components/ui/Article';

import useArtworkItem from '@hooks/useArtworkItem';

export function Detailspage() {
	const { id } = useParams();
	const { artwork, isLoading, isError } = useArtworkItem(Number(id));

	return (
		<>
			<Article header={`About ${artwork?.artist_title || 'Artwork'}`}>
				<DetailedArtworkCard artwork={artwork} isLoading={isLoading} isError={isError} />
			</Article>
		</>
	);
}
