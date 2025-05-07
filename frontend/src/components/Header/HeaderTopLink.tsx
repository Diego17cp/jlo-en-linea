interface HeaderTopLinkProps {
	href: string;
	children: React.ReactNode;
}
export const HeaderTopLink = ({ href, children }: HeaderTopLinkProps) => {
	return (
		<a
			href={ href }
			className="rounded-full text-xs md:text-base hover:py-2 hover:px-3 hover:bg-primary hover:font-bold flex items-center transition-all duration-300 ease-in-out"
		>
			{ children }
		</a>
	);
};
