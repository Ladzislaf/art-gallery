import { useSearchParams } from 'react-router-dom';

import ArtworksList from '../components/ArtworksList/ArtworksList';
import PaginationControls from '../components/PaginationControls/PaginationControls';
import Article from '../components/ui/Article';

import useArtworks from '../hooks/useArtworks';

const itemsPerPage = 3;

export default function Homepage() {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page') ?? '1';
	const { artworks, isLoading, isError } = useArtworks(itemsPerPage, Number(page));
	const { artworks: otherArtworks, isLoading: otherIsLoading, isError: otherIsError } = useArtworks(9, 100);

	return (
		<>
			<h1>
				Let's Find Some <span style={{ color: '#F17900' }}>Art</span> Here!
			</h1>
			<input type='text' placeholder='Search Art, Artist, Work...' />

			<Article header='Our special gallery' subheader='Topics for you'>
				<ArtworksList artworks={artworks} isLoading={isLoading} isError={isError} />
				<PaginationControls itemsCount={999} itemsPerPage={itemsPerPage} isDisabled={isLoading} />
			</Article>

			<Article header='Other works for you' subheader='Here some more'>
				<ArtworksList artworks={otherArtworks} isLoading={otherIsLoading} isError={otherIsError} cardType='mini' />
			</Article>
		</>
	);
}
