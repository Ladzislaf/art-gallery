import ArtworksList from '@components/ArtworksList/ArtworksList';
import Article from '@components/ui/Article';

import useArtworks from '@/hooks/useArtworks';
import SearchArtworksList from '@/components/ArtworksList/SearchArtworksList';

export default function Homepage() {
	const { artworks: otherArtworks, isLoading: otherIsLoading, isError: otherIsError } = useArtworks(9, 100);

	return (
		<>
			<SearchArtworksList itemsPerPage={3} />

			<Article header="Other works for you" subheader="Here some more">
				<ArtworksList artworks={otherArtworks} isLoading={otherIsLoading} isError={otherIsError} cardType="mini" />
			</Article>
		</>
	);
}
