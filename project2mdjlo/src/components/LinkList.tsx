import { Link } from "./Link";
interface LinkProps {
	icon: string;
	title: string;
	href: string;
	desc: string;
}
interface LinkListProps {
	data: LinkProps[];
}

export const LinkList = ({ data }: LinkListProps) => {
	return (
		<div className="link-list">
			{data.map((link, index) => (
				<Link
					key={link.title + index}
					icon={link.icon}
					title={link.title}
					href={link.href}
					desc={link.desc}
				></Link>
			))}
		</div>
	);
};
