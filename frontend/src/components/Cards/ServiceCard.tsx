import { Link } from "react-router";
import { Section } from "../../types";

export const ServiceCard = ({ id, title, iconUrl, href } : Omit<Section, 'desc'>) => {
    return (
        <Link to={href} className="group-hover:opacity-60 hover:opacity-100 py-8 px-8 flex items-center flex-col border-2 border-primary transition-all duration-300 ease-in-out rounded-lg shadow-md hover:shadow-lg hover:scale-110">  
            <div className="w-full rounded-full border border-tertiary h-2/3 flex justify-center items-center transition-all duration-300 ease-in-out group-hover:shadow-lg">
                <img src={iconUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-center items-center mt-6 h-1/3 w-full">
                <h3 className="m-0 text-center text-secondary font-titles">{title}</h3>
            </div>
        </Link>
    )
}