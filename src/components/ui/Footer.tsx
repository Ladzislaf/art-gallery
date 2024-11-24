import { Link } from 'react-router-dom';

import styles from '@components/ui/styles.module.scss';

import museumLogo from '@assets/museum-logo-light.svg';
import modsenLogo from '@assets/modsen-logo.svg';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<Link to={'/'}>
					<img src={museumLogo} alt="museum logo" />
				</Link>
				<Link to={'https://www.modsen-software.com'} target="_blank">
					<img src={modsenLogo} alt="modsen logo" />
				</Link>
			</div>
		</footer>
	);
}
