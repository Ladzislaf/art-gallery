import { useEffect, useState } from 'react';
import { Artwork } from '../utils/types';

const body = {
	fields: ['id', 'title', 'image_id', 'artist_title', 'is_public_domain', 'date_display', 'artist_display'],
};

export default function useArtworkItem(id: number) {
	const [artwork, setArtwork] = useState<Artwork | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://api.artic.edu/api/v1/artworks/${id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				if (!json.error) {
					setArtwork(json.data);
					setIsLoading(false);
				} else {
					setIsError(true);
				}
			})
			.catch(() => {
				setIsError(true);
			});
	}, [id]);

	return { artwork, isLoading, isError };
}
