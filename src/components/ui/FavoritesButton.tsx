import styles from './styles.module.scss';

import bookmark from '../../assets/bookmark.svg';

export default function FavoritesButton({ onClick }: { onClick?: () => void }) {
	return (
		<button className={styles.favoritesButton} onClick={onClick}>
			<img src={bookmark} alt='bookmark logo' />
		</button>
	);
}
