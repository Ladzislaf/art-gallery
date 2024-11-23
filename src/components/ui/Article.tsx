import styles from '@components/ui/styles.module.scss';

type ArticleProps = {
	header: string;
	subheader?: string;
};
export default function Article({ header, subheader, children }: React.PropsWithChildren<ArticleProps>) {
	return (
		<article className={styles.article}>
			<span>
				<p>{subheader}</p>
				<h2>{header}</h2>
			</span>
			{children}
		</article>
	);
}
