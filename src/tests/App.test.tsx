import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App component tests', () => {
	test('renders Header and Footer components', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);

		const headerElement = screen.getByRole('banner');
		const footerElement = screen.getByRole('contentinfo');

		expect(headerElement).toBeInTheDocument();
		expect(footerElement).toBeInTheDocument();
	});

	test('renders Homepage at root path', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);

		const homepageElement = screen.getByText(/Our special gallery/i);
		expect(homepageElement).toBeInTheDocument();
	});

	test('renders Favoritespage at /favorites path', () => {
		render(
			<MemoryRouter initialEntries={['/favorites']}>
				<App />
			</MemoryRouter>
		);

		const favoritesPageElement = screen.getByText(/Here are your Favorites/i);
		expect(favoritesPageElement).toBeInTheDocument();
	});

	test('renders Detailspage at /details/:id path', () => {
		render(
			<MemoryRouter initialEntries={['/details/1']}>
				<App />
			</MemoryRouter>
		);

		const detailsPageElement = screen.getByText(/about artwork/i);
		expect(detailsPageElement).toBeInTheDocument();
	});

	test('renders NotFoundpage for invalid paths', () => {
		render(
			<MemoryRouter initialEntries={['/invalid-path']}>
				<App />
			</MemoryRouter>
		);

		const notFoundPageElement = screen.getByText(/page not found/i);
		expect(notFoundPageElement).toBeInTheDocument();
	});
});
