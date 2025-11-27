import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const ConsultasLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Header />
			<main className="flex-1 w-full">{children}</main>
			<Footer />
		</div>
	);
};