import { string } from 'yup';

export const searchSchema = string()
	.min(3, 'Search query must be at least 3 characters')
	.max(20, 'Search query must be at most 20 characters')
	.matches(/^[A-Za-z\s]*$/, 'Search query must contain only English alphabet characters');
