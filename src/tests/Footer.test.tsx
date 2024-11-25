import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '@/components/ui/Footer';

describe('Footer component tests', () => {
	test('renders museum logo link', () => {
		render(
			<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Footer />
			</Router>
		);
		const museumLogoLink = screen.getByAltText('museum logo');
		expect(museumLogoLink).toBeInTheDocument();
		expect(museumLogoLink.closest('a')).toHaveAttribute('href', '/');
	});

	test('renders modsen logo link', () => {
		render(
			<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Footer />
			</Router>
		);
		const modsenLogoLink = screen.getByAltText('modsen logo');
		expect(modsenLogoLink).toBeInTheDocument();
		expect(modsenLogoLink.closest('a')).toHaveAttribute('href', 'https://www.modsen-software.com');
	});

	test('renders footer element', () => {
		render(
			<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<Footer />
			</Router>
		);
		const footerElement = screen.getByRole('contentinfo');
		expect(footerElement).toBeInTheDocument();
	});
});
