import { Section } from "./Section";

interface SectionProps {
    icon: string;
    title: string;
    href: string;
    desc: string;
}
interface SectionListProps {
    data: SectionProps[];
}

export const SectionList = ({ data }: SectionListProps) => {
    return (
        <div className="link-list">
            {data.map((link, index) => (
                <Section
                    key={link.title + index}
                    icon={link.icon}
                    title={link.title}
                    href={link.href}
                    desc={link.desc}
                ></Section>
            ))}
        </div>
    );
};