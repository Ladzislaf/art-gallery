export const API_URL = 'https://api.artic.edu/api/v1/artworks';
export const API_URL_SEARCH = 'https://api.artic.edu/api/v1/artworks/search';
export const QUERY = {
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
	limit: 3,
	fields: ['id', 'title', 'image_id', 'artist_title', 'is_public_domain'],
};
