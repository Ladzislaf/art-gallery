import { useEffect, useState } from 'react';

import styles from '@components/PaginationControls/PaginationControls.module.scss';

type PaginationControlsProps = {
	itemsCount: number;
	itemsPerPage: number;
	page: number;
	setPage: (page: number) => void;
	isDisabled: boolean;
};

function PaginationControls({ itemsCount, itemsPerPage, page, setPage, isDisabled }: PaginationControlsProps) {
	const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);

	useEffect(() => {
		const pagesCount = Math.ceil(itemsCount / itemsPerPage) || 1;

		if (!Number.isInteger(page) || page < 1 || page > pagesCount) return;

		if (pagesCount <= 5) {
			setPages(Array.from({ length: pagesCount }, (_, i) => i + 1));
		} else if (page < 3) {
			setPages([1, 2, 3, 4, 5]);
		} else if (page > pagesCount - 2) {
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
					onClick={() => setPage(p)}
					disabled={isDisabled}
				>
					{p}
				</button>
			))}
		</div>
	);
}

export default PaginationControls;
