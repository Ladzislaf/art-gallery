import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

import museumLogo from '../../assets/museum-logo-dark.svg';
import bookmark from '../../assets/bookmark.svg';
import home from '../../assets/home.svg';

export default function Header() {
	const location = useLocation();

	return (
		<header className={styles.header}>
			<div>
				<Link to="/">
					<img src={museumLogo} alt="museum logo" />
				</Link>
				<nav>
					{location.pathname !== '/' && (
						<Link to="/">
							<img src={home} alt="home logo" /> Home
						</Link>
					)}
					<Link to="/favorites">
						<img src={bookmark} alt="bookmark logo" /> Your favorites
					</Link>
				</nav>
			</div>
		</header>
	);
}
