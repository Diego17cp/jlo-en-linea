import { Link } from "./LinkItem";
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
		<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-4 w-full">
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
