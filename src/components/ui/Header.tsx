import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '@components/ui/styles.module.scss';

import museumLogo from '@assets/museum-logo-dark.svg';
import bookmark from '@assets/bookmark.svg';
import home from '@assets/home.svg';

export default function Header() {
	const [isOpened, setIsOpened] = useState(false);
	const location = useLocation();

	return (
		<header className={styles.header}>
			<div>
				<Link to="/">
					<img src={museumLogo} alt="museum logo" />
				</Link>
				<nav className={isOpened ? styles.active : ''} onClick={() => setIsOpened(false)}>
					{location.pathname !== '/' && (
						<Link to="/">
							<img src={home} alt="home logo" /> Home
						</Link>
					)}
					<Link to="/favorites">
						<img src={bookmark} alt="bookmark logo" /> Your favorites
					</Link>
				</nav>
				<button onClick={() => setIsOpened(!isOpened)}>Menu</button>
			</div>
		</header>
	);
}
