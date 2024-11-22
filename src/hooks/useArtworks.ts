import { useEffect, useState } from 'react';
import { Artwork } from '../utils/types';

const API_URL = 'https://api.artic.edu/api/v1/artworks/search';
const body = {
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

export default function useArtworks(itemsPerPage: number, page: number) {
	const [artworks, setArtworks] = useState<Artwork[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${API_URL}?page=${page}&limit=${itemsPerPage}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				if (!json.error) {
					setArtworks(json.data);
					setIsLoading(false);
				} else {
					setIsError(true);
				}
			})
			.catch(() => {
				setIsError(true);
			});
	}, [itemsPerPage, page]);

	return { artworks, isLoading, isError };
}
