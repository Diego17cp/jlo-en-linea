import React from 'react';
import { Link } from './Link';
interface LinkProps {
    icon: string;
    title: string;
    href: string;
    desc: string;
}
type LinkListProps = LinkProps[];

export const LinkList: React.FC<{ data: LinkListProps }> = ({ data }) => {
    return (
        <ul>
            {data.map((link, index) => (
                <Link key={index} icon={link.icon} title={link.title} href={link.href} desc={link.desc}>
                </Link>
            ))}
        </ul>
    );
};
