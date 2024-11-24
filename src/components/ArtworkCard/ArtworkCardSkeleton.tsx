import styles from '@components/ArtworkCard/ArtworkCard.module.scss';

import FavoritesButton from '@components/ui/FavoritesButton';
import ArtworkImage from '@components/ui/ArtworkImage';

export default function ArtworkCardSkeleton({ message }: { message?: string }) {
	const visibility = message ? 'hidden' : 'visible';

	return (
		<>
			<div className={styles.container} style={{ visibility: visibility }}>
				<ArtworkImage />

				<div className={styles.infoContainer}>
					<div>
						<p>title loading...</p>
						<p style={{ color: '#F17900' }}>artist loading...</p>
						<p>
							<strong>public</strong>
						</p>
					</div>

					<FavoritesButton />
				</div>
			</div>
			{message && <h2 style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>{message}</h2>}
		</>
	);
}
