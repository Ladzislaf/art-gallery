import { Link } from 'react-router-dom';

import artPlaceholder from '../../assets/art-placeholder.svg';

import styles from './styles.module.scss';

export default function ArtworkImage({ imageId, linkTo }: { imageId?: string; linkTo?: string }) {
	return (
		<Link to={linkTo || '#'} className={imageId ? styles.artworkImage : styles.artworkImagePlaceholder}>
			{imageId ? (
				<img
					className={styles.artworkImg}
					src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
					alt='artwork image'
				/>
			) : (
				<img className={styles.placeholderImg} src={artPlaceholder} alt='artwork placeholder image' />
			)}
		</Link>
	);
}
