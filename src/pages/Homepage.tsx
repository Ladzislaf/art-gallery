import ArtworksList from '@components/ArtworksList/ArtworksList';
import Article from '@components/ui/Article';

import useArtworks from '@/hooks/useArtworks';
import SearchArtworksList from '@/components/ArtworksList/SearchArtworksList';
import ErrorBoundary from '@/utils/ErrorBoundary';

export default function Homepage() {
	const { artworks: otherArtworks, isLoading: otherIsLoading, isError: otherIsError } = useArtworks(9, 100);

	return (
		<>
			<ErrorBoundary fallback={<h1>Search: Ooops, something went wrong.</h1>}>
				<SearchArtworksList itemsPerPage={3} />
			</ErrorBoundary>

			<Article header="Other works for you" subheader="Here some more">
				<ArtworksList artworks={otherArtworks} isLoading={otherIsLoading} isError={otherIsError} cardType="mini" />
			</Article>
		</>
	);
}
