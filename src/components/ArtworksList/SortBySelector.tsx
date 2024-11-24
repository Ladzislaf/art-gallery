import styles from '@components/ArtworksList/ArtworksList.module.scss';

import { SortBy } from '@/hooks/useArtworks';

export default function SortBySelector({ setSortBy }: { setSortBy: (sortBy: SortBy | undefined) => void }) {
	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === 'none') return setSortBy(undefined);

		const [newField, newOrder] = e.target.value.split('.');
		setSortBy({ field: newField as SortBy['field'], order: newOrder as SortBy['order'] });
	};

	return (
		<select className={styles.sortBy} defaultValue="none" onChange={handleSortChange}>
			<option value="none">Sort by</option>
			<option value="artist_title.asc">Artist asc</option>
			<option value="artist_title.desc">Artist desc</option>
			<option value="title.asc">Title asc</option>
			<option value="title.desc">Title desc</option>
		</select>
	);
}
