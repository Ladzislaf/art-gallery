import { useEffect, useState } from 'react';
import { Artwork } from '@utils/types';

const API_URL = 'https://api.artic.edu/api/v1/artworks/search';

type BoolQuery = {
	must: { term: { [key: string]: string | number | boolean } }[];
	should?: { match: { [key: string]: string } }[];
	minimum_should_match?: number;
};

type SearchBody = {
	query: { bool: BoolQuery };
	sort?: { [key: string]: { order: 'asc' | 'desc' } }[];
	fields: string[];
};

export type SortBy = {
	field: 'title' | 'artist_title';
	order: 'asc' | 'desc';
};

export default function useArtworks(itemsPerPage: number, page: number, searchTerm?: string, sortBy?: SortBy) {
	const [artworks, setArtworks] = useState<Artwork[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${API_URL}?page=${page}&limit=${itemsPerPage}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(getSearchBody(searchTerm, sortBy)),
		})
			.then((res) => res.json())
			.then((json) => {
				if (!json.error) {
					setArtworks(json.data);
					setTotalItems(Math.min(json.pagination.total, 900));
				} else {
					setIsError(true);
				}
			})
			.catch(() => {
				setIsError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [itemsPerPage, page, searchTerm, sortBy]);

	return { artworks, totalItems, isLoading, isError };
}

function getSearchBody(searchTerm?: string, sortBy?: SortBy) {
	const body: SearchBody = {
		query: {
			bool: {
				must: [{ term: { is_public_domain: true } }, { term: { artwork_type_id: 1 } }],
			},
		},
		fields: ['id', 'title', 'image_id', 'artist_title', 'is_public_domain'],
	};

	if (searchTerm) {
		body.query.bool.should = [{ match: { title: searchTerm } }, { match: { artist_title: searchTerm } }];
		body.query.bool.minimum_should_match = 1;
	}

	if (sortBy) {
		body.sort = [{ [`${sortBy.field}.keyword`]: { order: sortBy.order } }];
	}

	return body;
}
