import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from '@components/PaginationControls/PaginationControls.module.scss';

type PaginationControlsProps = {
	itemsCount: number;
	itemsPerPage: number;
	isDisabled: boolean;
};

export default function PaginationControls({ itemsCount, itemsPerPage, isDisabled }: PaginationControlsProps) {
	const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);
	const [searchParams, setSearchParams] = useSearchParams();
	const page = parseInt(searchParams.get('page') || '1');

	useEffect(() => {
		const pagesCount = Math.ceil(itemsCount / itemsPerPage);

		if (!Number.isInteger(page) || page > pagesCount) return;

		if (page < 3) {
			setPages([1, 2, 3, 4, 5]);
		} else if (page > itemsCount / itemsPerPage - 3) {
			setPages([pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]);
		} else {
			setPages([page - 2, page - 1, page, page + 1, page + 2]);
		}
	}, [page, itemsCount, itemsPerPage]);

	return (
		<div className={styles.container}>
			{pages.map((p) => (
				<button
					key={p}
					className={p === page ? styles.activePage : ''}
					onClick={() => {
						setSearchParams({ page: `${p}` });
					}}
					disabled={isDisabled}
				>
					{p}
				</button>
			))}
		</div>
	);
}
