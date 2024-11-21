import styles from './styles.module.scss';
import bookmark from '../../assets/bookmark.svg';

export default function FavoritesButton() {
	return (
		<button className={styles.favoritesButton}>
			<img src={bookmark} alt='bookmark logo' />
		</button>
	);
}
