import { useEffect, useState } from 'react';
import { ValidationError } from 'yup';

import styles from '@components/ArtworksList/ArtworksList.module.scss';

import Article from '@components/ui/Article';
import ArtworksList from '@components/ArtworksList/ArtworksList';
import PaginationControls from '@components/PaginationControls/PaginationControls';

import useArtworks from '@/hooks/useArtworks';
import useDebounce from '@/hooks/useDebounce';
import { searchSchema } from '@/utils/searchValidation';

import searchIcon from '@assets/search.svg';

export default function SearchArtworksList({ itemsPerPage }: { itemsPerPage: number }) {
	const [searchPage, setSearchPage] = useState(1);
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search);

	const [validatedSearch, setValidatedSearch] = useState('');
	const [validationMessage, setValidationMessage] = useState('');

	const { artworks, totalItems, isLoading, isError } = useArtworks(itemsPerPage, searchPage, validatedSearch);

	useEffect(() => {
		setValidationMessage('');

		if (debouncedSearch.length === 0) {
			setSearchPage(1);
			return setValidatedSearch('');
		}

		try {
			const validated = searchSchema.validateSync(debouncedSearch);
			setSearchPage(1);
			setValidatedSearch(validated || '');
		} catch (e) {
			setValidationMessage((e as ValidationError).message);
		}
	}, [debouncedSearch]);

	const handleSearchType = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<h1>
				Let's Find Some <span style={{ color: '#F17900' }}>Art</span> Here!
			</h1>

			<form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Search Art, Artist, Work..."
					maxLength={40}
					value={search}
					onChange={handleSearchType}
				/>
				<button type="submit">
					<img src={searchIcon} alt="search icon" />
				</button>
			</form>
			<p className={styles.validationMessage}>{validationMessage}</p>

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
