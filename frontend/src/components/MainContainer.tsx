import { useLocation } from "react-router";
export const MainContainer = ({ children }: { children: React.ReactNode }) => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	return (
		<div className={`${isHome ? 'p-0' : 'p-8'} md:p-8 bg-white rounded-xl w-semi-full min-h-1/2 h-auto flex items-center justify-center my-8 mx-auto`}>
			{children}
		</div>
	);
};
