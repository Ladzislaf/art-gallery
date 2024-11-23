import { Route, Routes } from 'react-router-dom';

import Footer from '@components/ui/Footer';
import Header from '@components/ui/Header';
import Homepage from '@pages/Homepage';
import { Favoritespage } from '@pages/Favoritespage';
import { Detailspage } from '@pages/Detailspage';
import NotFoundpage from '@pages/NotFoundpage';

import { FavoritesContextProvider } from '@utils/FavoritesContext';

function App() {
	return (
		<>
			<Header />
			<main>
				<FavoritesContextProvider>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/favorites" element={<Favoritespage />} />
						<Route path="/details/:id" element={<Detailspage />} />
						<Route path="*" element={<NotFoundpage />} />
					</Routes>
				</FavoritesContextProvider>
			</main>

			<Footer />
		</>
	);
}

export default App;
