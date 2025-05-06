export const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="p-8 bg-white rounded-xl w-semi-full min-h-1/2 h-auto flex items-center justify-center my-8 mx-auto">
			{children}
		</div>
	);
};
