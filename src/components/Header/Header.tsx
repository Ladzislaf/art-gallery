import styles from './Header.module.scss';
import museumLogo from '../../assets/museum-logo-dark.svg';
import bookmark from '../../assets/bookmark.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<Link to={'/'}>
					<img src={museumLogo} alt='museum logo' />
				</Link>
				<span>
					<img src={bookmark} alt='bookmark logo' />
					<Link to='/favorites'>Your favorites</Link>
				</span>
			</div>
		</header>
	);
}
