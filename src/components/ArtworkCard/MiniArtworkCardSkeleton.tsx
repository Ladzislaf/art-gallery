import styles from '@components/ArtworkCard/ArtworkCard.module.scss';

import FavoritesButton from '@components/ui/FavoritesButton';
import ArtworkImage from '@components/ui/ArtworkImage';

export default function MiniArtworkCard({ message }: { message?: string }) {
	const visibility = message ? 'hidden' : 'visible';

	return (
		<>
			<div className={styles.miniCardContainer} style={{ visibility: visibility }}>
				<ArtworkImage />

				<span>
					<p>title loading...</p>
					<p className={styles.artist}>artist loading...</p>
					<p>
						<strong>public</strong>
					</p>
				</span>

				<FavoritesButton />
			</div>
			{message && <h2 style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>{message}</h2>}
		</>
	);
}
