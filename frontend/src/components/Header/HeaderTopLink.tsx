interface HeaderTopLinkProps {
	href: string;
	children: React.ReactNode;
}
export const HeaderTopLink = ({ href, children }: HeaderTopLinkProps) => {
	return (
		<a
			href={ href }
			className="rounded-full hover:p-2 hover:bg-primary hover:font-bold flex items-center transition-all duration-300 ease-in-out"
		>
			{ children }
		</a>
	);
};
