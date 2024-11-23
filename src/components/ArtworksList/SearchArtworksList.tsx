import { useState } from 'react';

import styles from '@components/ArtworksList/ArtworksList.module.scss';

import Article from '@components/ui/Article';
import ArtworksList from '@components/ArtworksList/ArtworksList';
import PaginationControls from '@components/PaginationControls/PaginationControls';

import useArtworks from '@/hooks/useArtworks';

import search from '@assets/search.svg';

export default function SearchArtworksList({ itemsPerPage }: { itemsPerPage: number }) {
	const [searchString, setSearchString] = useState('');
	const [searchPage, setSearchPage] = useState(1);

	const { artworks, totalItems, isLoading, isError } = useArtworks(itemsPerPage, searchPage, searchString);

	const handleSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchPage(1);
		setSearchString(e.target.value);
	};

	return (
		<>
			<h1>
				Let's Find Some <span style={{ color: '#F17900' }}>Art</span> Here!
			</h1>

			<span className={styles.searchInputWrapper}>
				<input type="text" placeholder="Search Art, Artist, Work..." value={searchString} onChange={handleSearchType} />
				<img src={search} alt="search icon" />
			</span>

			<Article header="Our special gallery" subheader="Topics for you">
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
