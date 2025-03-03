import { useState } from "react";
import { colors } from "../utils";
export interface LinkProps {
	icon: string;
	title: string;
	desc: string;
	href: string;
}

export const Link = ({ icon, title, desc, href }: LinkProps) => {
	const [randomColor] = useState<string>(colors[Math.floor(Math.random() * colors.length)]);
	return (
		<div className="link-item">
			<a href={href} className="link" style={{
                color: randomColor
            }}>
				<i className={icon} />
			</a>
			<div className="link-content">
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</div>
	);
};
