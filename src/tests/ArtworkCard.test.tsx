import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArtworkCard from '@/components/ArtworkCard/ArtworkCard';
import FavoritesContext from '@utils/FavoritesContext';
import { Artwork } from '@/utils/types';

// Mock data for artwork
const mockArtwork = {
	id: 1,
	image_id: 'sampleImageId',
	title: 'Sample Artwork',
	artist_title: 'Sample Artist',
	is_public_domain: true,
};

describe('ArtworkCard component tests', () => {
	const mockAddFavorite = vi.fn();
	const mockRemoveFavorite = vi.fn();

	const renderWithFavoritesContext = (component: JSX.Element, favoriteIds: number[] = []) => {
		return render(
			<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<FavoritesContext.Provider
					value={{ favoriteIds, addFavorite: mockAddFavorite, removeFavorite: mockRemoveFavorite }}
				>
					{component}
				</FavoritesContext.Provider>
			</Router>
		);
	};

	test('renders artwork information correctly', () => {
		renderWithFavoritesContext(<ArtworkCard artwork={mockArtwork} />);

		expect(screen.getByText('Sample Artwork')).toBeInTheDocument();
		expect(screen.getByText('Sample Artist')).toBeInTheDocument();
		expect(screen.getByText('Public')).toBeInTheDocument();
		expect(screen.getByAltText('artwork image')).toBeInTheDocument();
	});

	test('renders unknown information for missing fields', () => {
		const incompleteArtwork = { id: 2, is_public_domain: false } as Artwork;
		renderWithFavoritesContext(<ArtworkCard artwork={incompleteArtwork} />);

		expect(screen.getByText('Unknown Title')).toBeInTheDocument();
		expect(screen.getByText('Unknown Artist')).toBeInTheDocument();
		expect(screen.getByText('Private')).toBeInTheDocument();
		expect(screen.getByAltText('artwork placeholder image')).toBeInTheDocument();
	});

	test('calls addFavorite when favorite button is clicked and artwork is not in favorites', () => {
		renderWithFavoritesContext(<ArtworkCard artwork={mockArtwork} />, []);

		const favoriteButton = screen.getByRole('button');
		fireEvent.click(favoriteButton);
		expect(mockAddFavorite).toHaveBeenCalledWith(mockArtwork);
	});

	test('calls removeFavorite when favorite button is clicked and artwork is in favorites', () => {
		renderWithFavoritesContext(<ArtworkCard artwork={mockArtwork} />, [1]);

		const favoriteButton = screen.getByRole('button');
		fireEvent.click(favoriteButton);
		expect(mockRemoveFavorite).toHaveBeenCalledWith(mockArtwork);
	});
});
