import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '@components/ui/Header';

describe('Header component tests', () => {
	test('renders museum logo link', () => {
		render(
			<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Header />
			</MemoryRouter>
		);
		const museumLogoLink = screen.getByAltText('museum logo');
		expect(museumLogoLink).toBeInTheDocument();
		expect(museumLogoLink.closest('a')).toHaveAttribute('href', '/');
	});

	test('renders favorites link', () => {
		render(
			<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Header />
			</MemoryRouter>
		);
		const bookmarkLogoLink = screen.getByAltText('bookmark logo');
		expect(bookmarkLogoLink).toBeInTheDocument();
		expect(bookmarkLogoLink.closest('a')).toHaveAttribute('href', '/favorites');
	});

	test('renders home link only when not on homepage', () => {
		render(
			<MemoryRouter initialEntries={['/favorites']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Header />
			</MemoryRouter>
		);
		const homeLogoLink = screen.getByAltText('home logo');
		expect(homeLogoLink).toBeInTheDocument();
		expect(homeLogoLink.closest('a')).toHaveAttribute('href', '/');
	});

	test('does not render home link when on homepage', () => {
		render(
			<MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Header />
			</MemoryRouter>
		);
		const homeLogoLink = screen.queryByAltText('home logo');
		expect(homeLogoLink).not.toBeInTheDocument();
	});

	test('menu button and nav click toggles nav visibility', () => {
		render(
			<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Header />
			</MemoryRouter>
		);

		const menuButton = screen.getByRole('button', { name: /menu/i });
		const nav = screen.getByRole('navigation');

		expect(nav).not.toHaveClass(/active/i);

		fireEvent.click(menuButton);
		expect(nav).toHaveClass(/active/i);

		fireEvent.click(nav);
		expect(nav).not.toHaveClass(/active/i);
	});
});
