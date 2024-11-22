import { Route, Routes } from 'react-router-dom';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import Homepage from './pages/Homepage';
import { Favoritespage } from './pages/Favoritespage';
import { Detailspage } from './pages/Detailspage';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/favorites' element={<Favoritespage />} />
					<Route path='/details/:id' element={<Detailspage />} />
					{/* Todo NotFound */}
					<Route path='*' element={<Homepage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
