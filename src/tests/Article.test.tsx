import { render, screen } from '@testing-library/react';
import Article from '@/components/ui/Article';

describe('Article component tests', () => {
	test('renders header and subheader', () => {
		render(
			<Article header="Test Header" subheader="Test Subheader">
				Test Content
			</Article>
		);

		const headerElement = screen.getByText('Test Header');
		const subheaderElement = screen.getByText('Test Subheader');

		expect(headerElement).toBeInTheDocument();
		expect(subheaderElement).toBeInTheDocument();
	});

	test('renders header without subheader', () => {
		render(<Article header="Test Header">Test Content</Article>);

		const headerElement = screen.getByText('Test Header');
		const subheaderElement = screen.queryByText('Test Subheader');

		expect(headerElement).toBeInTheDocument();
		expect(subheaderElement).not.toBeInTheDocument();
	});

	test('renders children content', () => {
		render(<Article header="Test Header">Test Content</Article>);

		const childrenContent = screen.getByText('Test Content');

		expect(childrenContent).toBeInTheDocument();
	});
});
