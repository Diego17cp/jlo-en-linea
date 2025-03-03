export interface LinkProps {
	icon: string;
	title: string;
	desc: string;
	href: string;
}
const colors = [
    "#3498db",
    "#2ecc71",
    "#9b59b6",
    "#e74c3c",
    "#f1c40f",
    "#1abc9c",
    "#34495e",
    "#e67e22",
    "#5DADE2",
    "#45B39D" 
]
const randomColor = colors[Math.floor(Math.random() * colors.length)]
export const Link = ({ icon, title, desc, href }: LinkProps) => {
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
