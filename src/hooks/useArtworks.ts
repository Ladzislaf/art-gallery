import { useEffect, useState } from 'react';
import { Artwork } from '@utils/types';

const API_URL = 'https://api.artic.edu/api/v1/artworks/search';

export default function useArtworks(itemsPerPage: number, page: number, searchTerm?: string) {
	const [artworks, setArtworks] = useState<Artwork[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${API_URL}?page=${page}&limit=${itemsPerPage}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(configureSeachBody(searchTerm)),
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
	}, [itemsPerPage, page, searchTerm]);

	return { artworks, totalItems, isLoading, isError };
}

function configureSeachBody(searchTerm?: string) {
	if (searchTerm) {
		return {
			query: {
				bool: {
					must: [
						{
							term: {
								is_public_domain: true,
							},
						},
						{
							term: {
								artwork_type_id: 1,
							},
						},
					],
					should: [
						{
							match: {
								title: searchTerm,
							},
						},
						{
							match: {
								artist_title: searchTerm,
							},
						},
					],
					minimum_should_match: 1,
				},
			},
			fields: ['id', 'title', 'image_id', 'artist_title', 'is_public_domain'],
		};
	} else {
		return {
			query: {
				bool: {
					must: [
						{
							term: {
								is_public_domain: true,
							},
						},
						{
							term: {
								artwork_type_id: 1,
							},
						},
					],
				},
			},
			fields: ['id', 'title', 'image_id', 'artist_title', 'is_public_domain'],
		};
	}
}
