import { render, screen, fireEvent } from '@testing-library/react';
import FavoritesButton from '@/components/ui/FavoritesButton';

describe('FavoritesButton component tests', () => {
	test('renders button with bookmark logo', () => {
		render(<FavoritesButton />);
		const button = screen.getByRole('button');
		const bookmarkLogo = screen.getByAltText('bookmark logo');
		expect(button).toBeInTheDocument();
		expect(bookmarkLogo).toBeInTheDocument();
	});

	test('applies correct background color when isFavorite is true', () => {
		render(<FavoritesButton isFavorite={true} />);
		const button = screen.getByRole('button');
		expect(button).toHaveStyle({ backgroundColor: '#fbd7b230' });
	});

	test('applies correct background color when isFavorite is false', () => {
		render(<FavoritesButton isFavorite={false} />);
		const button = screen.getByRole('button');
		expect(button).toHaveStyle({ backgroundColor: '#f9f9f9' });
	});

	test('calls onClick handler when clicked', () => {
		const onClickMock = vi.fn();
		render(<FavoritesButton onClick={onClickMock} />);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
