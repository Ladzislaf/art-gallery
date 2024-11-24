import styles from '@components/ArtworkCard/ArtworkCard.module.scss';

import FavoritesButton from '@components/ui/FavoritesButton';
import ArtworkImage from '@components/ui/ArtworkImage';

export default function DetailedArtworkCard({ message }: { message?: string }) {
	const visibility = message ? 'hidden' : 'visible';

	return (
		<>
			<span style={{ position: 'relative' }}>
				<div className={styles.detailsContainer} style={{ visibility: visibility }}>
					<span>
						<FavoritesButton />
						<ArtworkImage />
					</span>

					<div>
						<div>
							<h2>title loading...</h2>
							<h3>
								<span>artist loading...</span>
							</h3>
							<h4>date loading...</h4>
						</div>
						<div>
							<h2>Overview</h2>
							<p>
								<span>About artist:</span> loading...
							</p>
							public
						</div>
					</div>
				</div>
				{message && (
					<h2 style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
						{message}
					</h2>
				)}
			</span>
		</>
	);
}
