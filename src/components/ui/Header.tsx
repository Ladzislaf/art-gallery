import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import museumLogo from '../../assets/museum-logo-dark.svg';
import bookmark from '../../assets/bookmark.svg';

export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<Link to={'/'}>
					<img src={museumLogo} alt='museum logo' />
				</Link>
				<span>
					<Link to='/favorites'>
						<img src={bookmark} alt='bookmark logo' /> Your favorites
					</Link>
				</span>
			</div>
		</header>
	);
}
