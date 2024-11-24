import { useState } from 'react';

import Article from '@components/ui/Article';
import ArtworksList from '@components/ArtworksList/ArtworksList';
import PaginationControls from '@components/PaginationControls/PaginationControls';
import SearchForm from '@components/ArtworksList/SearchForm';
import SortBySelector from '@components/ArtworksList/SortBySelector';

import useArtworks, { SortBy } from '@/hooks/useArtworks';

export default function SearchArtworksList({ itemsPerPage }: { itemsPerPage: number }) {
	const [searchPage, setSearchPage] = useState(1);
	const [validatedSearch, setValidatedSearch] = useState('');
	const [sortBy, setSortBy] = useState<SortBy>();

	const { artworks, totalItems, isLoading, isError } = useArtworks(itemsPerPage, searchPage, validatedSearch, sortBy);

	return (
		<>
			<h1>
				Let's Find Some <span style={{ color: '#F17900' }}>Art</span> Here!
			</h1>

			<SearchForm
				onSubmit={(e) => e.preventDefault()}
				setValidatedSearch={setValidatedSearch}
				setSearchPage={setSearchPage}
			/>

			<Article header="Our special gallery" subheader="Topics for you">
				<SortBySelector setSortBy={setSortBy} />
				<ArtworksList artworks={artworks} isLoading={isLoading} isError={isError} />
				<PaginationControls
					itemsCount={totalItems}
					itemsPerPage={itemsPerPage}
					page={searchPage}
					setPage={setSearchPage}
					isDisabled={isLoading}
				/>
			</Article>
		</>
	);
}
