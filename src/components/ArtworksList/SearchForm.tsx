import { useEffect, useState } from 'react';
import { ValidationError } from 'yup';

import styles from '@components/ArtworksList/ArtworksList.module.scss';

import { searchSchema } from '@/utils/searchValidation';
import useDebounce from '@/hooks/useDebounce';

import searchIcon from '@assets/search.svg';

type SearchFormProps = {
	onSubmit: (e: React.FormEvent) => void;
	setValidatedSearch: (str: string) => void;
	setSearchPage: (page: number) => void;
};

export default function SearchForm({ onSubmit, setValidatedSearch, setSearchPage }: SearchFormProps) {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search);
	const [validationMessage, setValidationMessage] = useState('');

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
	}, [debouncedSearch, setValidatedSearch, setSearchPage]);

	const handleSearchType = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<form className={styles.searchForm} onSubmit={onSubmit}>
			<div>
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
			</div>

			<p className={styles.validationMessage}>{validationMessage}</p>
		</form>
	);
}
