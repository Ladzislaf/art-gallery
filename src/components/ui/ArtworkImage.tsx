import { Link } from 'react-router-dom';

import styles from '@components/ui/styles.module.scss';

import artPlaceholder from '@assets/art-placeholder.svg';

export default function ArtworkImage({ imageId, linkTo }: { imageId?: string; linkTo?: string }) {
	return (
		<Link to={linkTo || '#'} className={styles.artworkImage}>
			{imageId ? (
				<img
					className={styles.artworkImg}
					src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
					alt="artwork image"
				/>
			) : (
				<img className={styles.placeholderImg} src={artPlaceholder} alt="artwork placeholder image" />
			)}
		</Link>
	);
}
