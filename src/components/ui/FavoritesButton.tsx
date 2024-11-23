import styles from './styles.module.scss';

import bookmark from '../../assets/bookmark.svg';

export default function FavoritesButton({ onClick, isFavorite }: { onClick?: () => void; isFavorite?: boolean }) {
	const bgColor = isFavorite ? '#fbd7b230' : '#f9f9f9';

	return (
		<button className={styles.favoritesButton} style={{ backgroundColor: bgColor }} onClick={onClick}>
			<img src={bookmark} alt='bookmark logo' />
		</button>
	);
}
