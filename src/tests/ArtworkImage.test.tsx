import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArtworkImage from '@/components/ui/ArtworkImage';

describe('ArtworkImage component tests', () => {
	test('renders artwork image when imageId is provided', () => {
		render(
			<MemoryRouter>
				<ArtworkImage imageId="sampleImageId" />
			</MemoryRouter>
		);
		const artworkImage = screen.getByAltText('artwork image');
		expect(artworkImage).toBeInTheDocument();
		expect(artworkImage).toHaveAttribute('src', 'https://www.artic.edu/iiif/2/sampleImageId/full/843,/0/default.jpg');
	});

	test('renders placeholder image when imageId is not provided', () => {
		render(
			<MemoryRouter>
				<ArtworkImage />
			</MemoryRouter>
		);
		const placeholderImage = screen.getByAltText('artwork placeholder image');
		expect(placeholderImage).toBeInTheDocument();
		expect(placeholderImage).toHaveAttribute('src', expect.stringContaining('art-placeholder.svg'));
	});

	test('links to provided linkTo prop', () => {
		render(
			<MemoryRouter>
				<ArtworkImage imageId="sampleImageId" linkTo="/sample-link" />
			</MemoryRouter>
		);
		const linkElement = screen.getByRole('link');
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', '/sample-link');
	});

	test('links to "#" when linkTo prop is not provided', () => {
		render(
			<MemoryRouter>
				<ArtworkImage imageId="sampleImageId" />
			</MemoryRouter>
		);
		const linkElement = screen.getByRole('link');
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', '/');
	});
});
