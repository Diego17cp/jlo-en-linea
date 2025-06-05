import { ServiceCard } from "./Cards/ServiceCard";
interface LinkListProps {
	data: Section[];
}

export const LinkList = ({ data }: LinkListProps) => {
	return (
		<div className="group grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-12 gap-y-25 p-4 w-full">
			{data.map((link) => (
				<ServiceCard
					key={link.id}
					iconUrl={link.iconUrl}
					title={link.title}
					href={link.href}
				></ServiceCard>
			))}
		</div>
	);
};
