import styles from './ArtworkImage.module.scss';
import artPlaceholder from '../../assets/art-placeholder.svg';
import { Link } from 'react-router-dom';

function ImageComponent({ imageId }: { imageId?: string }) {
	if (imageId) {
		return (
			<img
				className={styles.artworkImg}
				src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
				alt='artwork image'
			/>
		);
	} else {
		return <img className={styles.placeholderImg} src={artPlaceholder} alt='artwork placeholder image' />;
	}
}

export default function ArtworkImage({ imageId, linkTo }: { imageId?: string; linkTo?: string }) {
	return (
		<>
			{linkTo ? (
				<Link to={linkTo} className={styles.artworkLink}>
					<ImageComponent imageId={imageId} />
				</Link>
			) : (
				<span className={styles.imgWrapper}>
					<ImageComponent imageId={imageId} />
				</span>
			)}
		</>
	);
}
