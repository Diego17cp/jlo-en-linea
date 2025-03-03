export interface LinkProps {
	icon: string;
	title: string;
	desc: string;
	href: string;
}
export const Link = ({ icon, title, desc, href }: LinkProps) => {
	return (
		<div className="link-item">
			<a href={href} className="link">
				<i className={icon} />
			</a>
			<div className="link-content">
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</div>
	);
};
